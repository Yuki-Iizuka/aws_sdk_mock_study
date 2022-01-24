(async () => {
  const fetchBucketNames = require('./s3');
  const bucketNames = await fetchBucketNames();
  console.log(bucketNames);
})();
