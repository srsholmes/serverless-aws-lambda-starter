const hello = (event, context, callback) => {
  const a = { hello: 'world', };
  const b = { world: 'hello', };
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello AWS Lambda',
      input: event,
      spreadTest: { ...a, ...b },
    }),
  };
  callback(null, response);
};

export default hello;
