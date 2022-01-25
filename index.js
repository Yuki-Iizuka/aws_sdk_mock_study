async function s3CallSample() {
  const fetchBucketNames = require('./lib/s3');
  const bucketNames = await fetchBucketNames();
  console.log(bucketNames);
}

async function dynamoDBCallSample() {
  const putItem = require('./lib/dynamodb');
  const params = {
    'TableName': 'sample-table',
    'Item': {
      'id': 'recordId',
      'value': 'recordValue'
    }
  }
  await putItem(params);
}

(async () => {
  // await s3CallSample();
  // await dynamoDBCallSample();
})();
