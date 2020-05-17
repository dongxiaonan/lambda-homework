// from https://medium.com/codebase/using-aws-s3-buckets-in-a-nodejs-app-74da2fc547a6

const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

//configuring the AWS environment
AWS.config.update({
    accessKeyId: "<Access Key Here>",
    secretAccessKey: "<Secret Access Key Here>"
  });

var s3 = new AWS.S3();
var filePath = "./data/file.txt";

//configuring parameters
var params = {
  Bucket: '<Bucket Name Here>',
  Body : fs.createReadStream(filePath),
  Key : "folder/"+Date.now()+"_"+path.basename(filePath)
};

s3.upload(params, function (err, data) {
  //handle error
  if (err) {
    console.log("Error", err);
  }

  //success
  if (data) {
    console.log("Uploaded in:", data.Location);
  }
});