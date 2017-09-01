const asyncFunc = async (event, context, callback) => {

  function resolveAfter2MilliSeconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 200);
    });
  }

  async function add1(x) {
    var a = resolveAfter2MilliSeconds(20);
    var b = resolveAfter2MilliSeconds(30);
    return x + await a + await b;
  }

  const a = await add1(1);
  const b = await add1(10);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello AWS Lambda',
      input: event,
      test: { a, b },
    }),
  };
  callback(null, response);
};

export default asyncFunc;
