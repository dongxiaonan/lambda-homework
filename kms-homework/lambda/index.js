const aws = require('aws-sdk')

exports.handler = async (event, context, callback) => {

    const kms = new aws.KMS()
    let params = {
      CiphertextBlob: Buffer.from("AQICAHhmICCu6NLYsb6M5kxK8RIOLP5ieCwrjd0+nekHOVcRRAHaWpjyhm0lAF84quJJn06lAAAAajBoBgkqhkiG9w0BBwagWzBZAgEAMFQGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMPCDnc2RXeZqJeyj/AgEQgCeKWDLD/fdXEoVwTvGsyzAsT7PZBMYnyQ4Kg1Ed6my9u68cgmkho7I=", 'base64')
    }

    var answer = ""
    kms.decrypt(params, function (err, data) {
      console.log('decrypt')
      if (err) answer = err  // an error occurred
      else     answer = data          // successful response
    })

    const response = {
        statusCode: 200,
        body: JSON.stringify(answer),
    };
    return response;
};
