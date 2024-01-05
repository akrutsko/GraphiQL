class Api {
  apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  parseJsonWithValidation(json: string): Record<string, string> | undefined {
    try {
      return JSON.parse(json);
    } catch {
      return undefined;
    }
  }

  async fetchInfo(query: string, variables?: Record<string, string>, reqHeaders?: Record<string, string>) {
    const body = JSON.stringify({ query, variables });
    const headers = new Headers(reqHeaders);
    headers.append('Content-Type', 'application/json');

    const response = await fetch(this.apiUrl, { method: 'POST', headers, body });
    return response.json();
  }
}

const createApi = (apiUrl: string) => {
  return new Api(apiUrl);
};
export default createApi;
