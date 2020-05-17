"use strict";

const AWS = require("aws-sdk");

const lambda = new AWS.Lambda({
  region: "us-west-2"
});

// The action lambda
module.exports.print_strings = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `${event} - from the other function`
    })
  };
  callback(null, response);
};

// The cron Lambda
module.exports.cron_launcher = (event, context, callback) => {
  const fakeDBResults = [
    "Good morning.",
    "How are you?",
    "May I pet your dog?",
    "Oh, that's nice"
  ];

  fakeDBResults.forEach(message_string => {
    const params = {
      FunctionName: "lambda-invokes-lambda-node-dev-print_strings",
      InvocationType: "RequestResponse",
      Payload: JSON.stringify(message_string)
    };

    return lambda.invoke(params, function(error, data) {
      if (error) {
        console.error(JSON.stringify(error));
        return new Error(`Error printing messages: ${JSON.stringify(error)}`);
      } else if (data) {
        console.log(data);
      }
    });
  });
};
