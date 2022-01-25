async function putItem(params) {
  const aws = require('aws-sdk');
  const documentClient = new aws.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

  return await documentClient.put(params).promise();
}

module.exports = putItem;
