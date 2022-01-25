const putItem = require('../../lib/dynamodb');

// initialize AWS mock
const aws = require('aws-sdk');
const awsMock = require('aws-sdk-mock');
awsMock.setSDKInstance(aws);

test('expected data is put to dynamodb', async () => {
  const params = {
    'TableName': 'test-table',
    'Item': {
      'id': 'dummy'
    }
  }

  // mock DynamoDB.DocumentClient.put response
  const putMock = jest.fn(() => 'successfully put item in database');
  awsMock.mock('DynamoDB.DocumentClient', 'put', (params, callback) => callback(null, putMock(params)))

  await putItem(params);

  expect(putMock).toHaveBeenCalledWith(params);
});
