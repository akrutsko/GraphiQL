class Api {
  apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  private parseJsonWithValidation(jsonString: string) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      return null;
    }
  }

  async fetchInfo(query: string, variablesString: string, headersString: string) {
    let bodyResponse = JSON.stringify({ query });
    let headersResponse = {
      'Content-Type': 'application/json',
    };
    if (variablesString.trim()) {
      const variables = this.parseJsonWithValidation(variablesString);
      if (!variables) {
        return 'variables';
      }
      bodyResponse = JSON.stringify({ query, variables });
    }
    if (headersString.trim()) {
      const headers = this.parseJsonWithValidation(headersString);
      if (!headers) {
        return 'headers';
      }
      headersResponse = {
        'Content-Type': 'application/json',
        ...headers,
      };
    }
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: headersResponse,
      body: bodyResponse,
    });

    return await response.json();
  }
}

const createApi = (apiUrl: string) => {
  return new Api(apiUrl);
};
export default createApi;
