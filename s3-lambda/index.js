"use strict";

// The action lambda
module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `event from outside: ${event}`
    })
  };
  callback(null, response);
};
