// https://github.com/udemy/CodeceptJS/blob/master/lib/assert/equal.js
// is a decorator for https://github.com/udemy/CodeceptJS/blob/master/lib/assert.js

class EqualityAssertion extends Assertion {
  getException() {
    const params = this.params;
    params.jar = template(params.jar, params);
    const err = new AssertionFailedError(
      params,
      '{{customMessage}}expected {{jar}} "{{expected}}" {{type}} "{{actual}}"'
    );
    err.showDiff = false;
    if (typeof err.cliMessage === "function") {
      err.message = err.cliMessage();
    }
    err.cliMessage = () => {
      const msg = err.template.replace(
        "{{jar}}",
        output.colors.bold("{{jar}}")
      );
      return template(msg, this.params);
    };
    return err;
  }

  addAssertParams() {
    this.params.expected = arguments[0];
    this.params.actual = arguments[1];
    this.params.customMessage = arguments[2] ? `${arguments[2]}\n\n` : "";
  }
}

class Assertion {
  assert() {
    this.addAssertParams.apply(this, arguments);
    const result = this.comparator.apply(this.params, arguments);
    if (result) return; // should increase global assertion counter
    throw this.getFailedAssertion();
  }

  addAssertParams() {}

  getException() {
    return new AssertionFailedError(this.params, "");
  }
}

/*
  ____________________________DESCRIPTION_______________________________
  EqualityAssertion extends methods described in Assertion class,
  so it serves as a decorator for the Assetion class
*/
