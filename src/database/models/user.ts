import { CreateTableCommand, CreateTableInput } from "@aws-sdk/client-dynamodb";
import docClient from '../../database/client';

const userTableParams: CreateTableInput  = {
  TableName: 'Users',
  KeySchema: [
    { AttributeName: 'PK', KeyType: 'HASH' },
    { AttributeName: 'SK', KeyType: 'RANGE' }
  ],
  AttributeDefinitions: [
    { AttributeName: 'PK', AttributeType: 'S' },
    { AttributeName: 'SK', AttributeType: 'S' }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 2,
    WriteCapacityUnits: 2
  }
}

docClient.send(
  new CreateTableCommand(userTableParams)
)
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });