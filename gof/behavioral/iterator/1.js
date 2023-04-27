/*
    ____________________________DESCRIPTION_______________________________
    I did not found any iterator implementation, maybe because generally,
    there are not a lot of data types, such as hash tree or so, which require some iterator implementaion.
    So there is no need of creating an iterator and developers tend to use inbuilt iterators,
    like for..of or for..in and so on

    But I know there is a way of making objects suitable for for..of loop, but still,
    I havent used it once, so...
*/

const someObj = {
  a: 1,
  b: 2,
  c: "trigger",
};

Object.defineProperty(someObj, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function () {
    let o = this;
    let idx = 0;
    let ks = Object.keys(o);
    return {
      next: function () {
        return {
          value: o[ks[idx++]],
          done: idx > ks.length,
        };
      },
    };
  },
});

for (let value of someObj) {
  console.log(value);
}

// 1 2 trigger
