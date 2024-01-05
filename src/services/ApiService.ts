class Api {
  apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  parseJsonWithValidation(jsonString: string) {
    try {
      if (jsonString.trim() === '') {
        return 'empty';
      } else {
        return JSON.parse(jsonString);
      }
    } catch (error) {
      return null;
    }
  }

  async fetchInfo(query: string, variables: object | string, headers: object | string) {
    const isVariablesString = typeof variables === 'string';
    const isHeadersString = typeof headers === 'string';

    const requestBody = isVariablesString ? { query } : { query, variables };
    const requestHeaders = isHeadersString
      ? { 'Content-Type': 'application/json' }
      : {
          'Content-Type': 'application/json',
          ...headers,
        };

    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(requestBody),
    });

    return await response.json();
  }
}

const createApi = (apiUrl: string) => {
  return new Api(apiUrl);
};
export default createApi;
