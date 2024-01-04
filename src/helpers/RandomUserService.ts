import { Gender, GenderSelection, Nationality } from "./types";

const DEFAULT_URL = "https://randomuser.me/api/?";
const defaultGender = "all";

export default class ExportUserService {
  constructor(
    private apiUrl: string = DEFAULT_URL,
    private generateFromGender: GenderSelection = "all",
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

  private getFetchUrl() {
    return (
      this.apiUrl +
      new URLSearchParams({
        gender: this.generateFromGender,
        nat: this.generateFromNationalities.join(","),
      })
    );
  }

  fetchRandomUser = async () => {
    try {
      const response = await fetch(this.getFetchUrl(), {
        method: "GET",
      });
      return await response.json();
    } catch (e: unknown) {}
  };
}
