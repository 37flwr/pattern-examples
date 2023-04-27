// https://github.com/jangolle/monobank-api-client/blob/17de7d1f4d5c1b67daf4b4390c10ac3a81d646b8/src/ClientFactory.js

class ClientFactory {
  static createPersonal(token, baseURL = BASE_URL, timeout = TIMEOUT) {
    return new MonobankApi({ token, baseURL, timeout });
  }

  static createCorporate(
    keyId,
    privateKey,
    baseURL = BASE_URL,
    timeout = TIMEOUT
  ) {
    return new MonobankCorporateApi({
      keyId,
      signer: new Signer(privateKey),
      baseURL,
      timeout,
    });
  }
}

/*
  ____________________________DESCRIPTION_______________________________
  ClientFactory is a factory, which produces personal or corporate apis
*/
