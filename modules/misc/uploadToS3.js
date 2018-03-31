var AWS = require('aws-sdk');

var s3 = new AWS.S3();

AWS.config.update({ 
    "accessKeyId": "AKIAJAQ357JTY5PYX5PA",
    "secretAccessKey": "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", 
    "region": "ap-south-1" 
})

// Bucket names must be unique across all S3 users

var myBucket = 'sih-2018';

var myKey = 'new-folder';

const uploadToS3 = (data) => {
    params = { Bucket: myBucket, Key: myKey, Body: data };

    s3.putObject(params, function (err, data) {

        if (err) {

            console.log(err)

        } else {

            console.log("Successfully uploaded data to myBucket/myKey");
            console.log(data);

        }

    });
}

module.exports = uploadToS3;
