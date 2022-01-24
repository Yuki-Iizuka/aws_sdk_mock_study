async function fetchBucketNames() {
  const AWS = require('aws-sdk');
  const s3 = new AWS.S3({apiVersion: '2006-03-01'});

  const result = await s3.listBuckets().promise();
  return result.Buckets.map(bucket => bucket.Name);
}

(async () => {
  const bucketNames = await fetchBucketNames();
  console.log(bucketNames);
})();
