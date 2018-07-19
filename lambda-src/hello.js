exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: '',
    body: 'Let there be light!',
  });
};
