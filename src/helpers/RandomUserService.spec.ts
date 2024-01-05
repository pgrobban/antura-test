import RandomUserService, { DEFAULT_URL } from "./RandomUserService";
import { Gender, Nationality, isSuccessResponse } from "./types";

describe("#RandomUserService", () => {
  let service: RandomUserService;
  beforeEach(() => {
    service = new RandomUserService();
  });

  describe("#getFetchUrl", () => {
    test("Should generate an URL without additional params", () => {
      const result = service.getFetchUrl();
      expect(result).toContain(DEFAULT_URL);
      expect(result).not.toContain("nat");
      expect(result).not.toContain("gender");
    });

    test("Should generate an URL with gender param", () => {
      const service = new RandomUserService();
      service.setGenerateFromGender(Gender.Female);
      const result = service.getFetchUrl();
      expect(result).toContain(DEFAULT_URL);
      expect(result).not.toContain("nat");
      expect(result).toContain("gender");
      expect(result).toContain(Gender.Female);
    });

    test("Should generate an URL with nationality param", () => {
      const service = new RandomUserService();
      service.setGenerateFromNationalities([Nationality.AU, Nationality.CH]);
      const result = service.getFetchUrl();
      expect(result).toContain(DEFAULT_URL);
      expect(result).not.toContain("gender");
      expect(result).toContain("nat");
      expect(result).toContain(Nationality.AU);
      expect(result).toContain(Nationality.CH);
    });

    test("Should generate an URL with gender and nationality param", () => {
      const service = new RandomUserService();
      service.setGenerateFromGender(Gender.Female);
      service.setGenerateFromNationalities([Nationality.AU, Nationality.CH]);
      const result = service.getFetchUrl();
      expect(result).toContain(DEFAULT_URL);
      expect(result).toContain("gender");
      expect(result).toContain("nat");
      expect(result).toContain(Gender.Female);
      expect(result).toContain(Nationality.AU);
      expect(result).toContain(Nationality.CH);
    });
  });

  describe("#fetchRandomUser", () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    test("Should resolve with a SuccessResponse if a user was generated", async () => {
      // @ts-ignore-next-line
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              results: [{ name: { first: "Test User" } }],
            }),
        })
      );
      const response = await service.fetchRandomUser();
      expect(isSuccessResponse(response)).toBe(true);
      if (!isSuccessResponse(response)) {
        return; // to make TS happy
      }

      expect(response.results[0].name.first).toBe("Test User");
    });

    test("Should resolve with a ErrorResponse if the request returned an error", async () => {
      // @ts-ignore-next-line
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              error: "Some error",
            }),
        })
      );
      const response = await service.fetchRandomUser();
      expect(isSuccessResponse(response)).toBe(false);
    });

    test("Should resolve with a ErrorResponse if the request threw an error", async () => {
      // @ts-ignore-next-line
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
        })
      );
      const response = await service.fetchRandomUser();
      expect(isSuccessResponse(response)).toBe(false);
    });
  });
});
