async function fetchBucketNames() {
  const aws = require('aws-sdk');
  const s3 = new aws.S3({ apiVersion: '2006-03-01' });

  const result = await s3.listBuckets().promise();
  return result.Buckets.map(bucket => bucket.Name);
}

module.exports = fetchBucketNames;
