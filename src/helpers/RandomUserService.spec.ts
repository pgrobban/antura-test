import RandomUserService, { DEFAULT_URL } from "./RandomUserService";
import { AllSelection, Nationality } from "./types";

describe("#RandomUserService", () => {
  describe("#getFetchUrl", () => {
    test("#Should generate an URL without additional params", () => {
      const service = new RandomUserService();
      const result = service.getFetchUrl();
      expect(result).toContain(DEFAULT_URL);
      expect(result).toContain(AllSelection.All);
      Object.values(Nationality).forEach((val) => {
        expect(result).toContain(val);
      });
    });
  });
});
