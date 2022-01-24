const fetchBucketNames = require('./s3');

// initialize AWS mock
const aws = require('aws-sdk');
const awsMock = require('aws-sdk-mock');
awsMock.setSDKInstance(aws);

test('get bucket names(mock)', async () => {
  // mock S3.listBuckets response
  awsMock.mock('S3', 'listBuckets', {
    Buckets: [
      { Name: 'foo' },
      { Name: 'bar' }
    ]
  });

  const result = await fetchBucketNames();
  ['foo', 'bar'].forEach(expected => {
    expect(result).toContain(expected)
  });
});

test('get bucket names(remock)', async () => {
  // remock S3.listBuckets response
  awsMock.remock('S3', 'listBuckets', {
    Buckets: [
      { Name: 'hoge' },
      { Name: 'fuga' }
    ]
  });

  const result = await fetchBucketNames();
  ['hoge', 'fuga'].forEach(expected => {
    expect(result).toContain(expected)
  });
});
