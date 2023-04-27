// https://github.com/jangolle/monobank-api-client/blob/17de7d1f4d5c1b67daf4b4390c10ac3a81d646b8/src/MonobankApi.js

class ClientFactory {
  static createPersonal(token, baseURL = BASE_URL, timeout = TIMEOUT) {
    return new MonobankApi({ token, baseURL, timeout });
  }
}

class MonobankApi extends MonobankBaseApi {
  /**
   * @param {string} token
   * @param {string} baseURL
   * @param {int} timeout
   */
  constructor({ token, baseURL, timeout }) {
    super({ baseURL, timeout });

    this._client = axios.create(
      Object.assign(this._clientOptions, {
        headers: {
          "X-Token": token,
        },
      })
    );
  }
}

/*
  ____________________________DESCRIPTION_______________________________
  MonobankApi is responsible for creating MonobankBaseApi
  It does so by calling super method, which basically 
  represents constructor in MonobankBaseApi
*/
