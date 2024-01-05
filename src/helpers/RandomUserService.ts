import {
  AllSelection,
  ErrorResponse,
  GenderSelection,
  Nationality,
  RandomUserResponse,
} from "./types";

export const DEFAULT_URL = "https://randomuser.me/api/?";

const defaultErrorResponse: ErrorResponse = {
  error: "Failed to fetch",
};

export default class ExportUserService {
  constructor(
    private apiUrl: string = DEFAULT_URL,
    private generateFromGender: GenderSelection = AllSelection.All,
    private generateFromNationalities: Nationality[] = Object.values(
      Nationality
    )
  ) {}

  getGenerateFromGender() {
    return this.generateFromGender;
  }

  setGenerateFromGender(genderSelection: GenderSelection) {
    this.generateFromGender = genderSelection;
  }

  getGenerateFromNationalities() {
    return this.generateFromNationalities;
  }

  setGenerateFromNationalities(nationalitiesSelection: Nationality[]) {
    this.generateFromNationalities = nationalitiesSelection;
  }

  getFetchUrl() {
    return (
      this.apiUrl +
      new URLSearchParams({
        gender: this.generateFromGender,
        nat: this.generateFromNationalities.join(","),
      })
    );
  }

  async fetchRandomUser(): Promise<RandomUserResponse> {
    try {
      const response = await fetch(this.getFetchUrl(), {
        method: "GET",
      });
      if (response.ok) {
        return (await response.json()) as RandomUserResponse;
      }
      return defaultErrorResponse;
    } catch (e: unknown) {
      return defaultErrorResponse;
    }
  }
}
