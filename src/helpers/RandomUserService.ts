const DEFAULT_URL = "https://randomuser.me/api";

export default class ExportUserService {
  constructor(private apiUrl: string = DEFAULT_URL) {}

  fetchRandomUser = async () => {
    try {
      const response = await fetch(this.apiUrl, {
        method: "GET",
      });
      return await response.json();
    } catch (e: unknown) {}
  };
}
