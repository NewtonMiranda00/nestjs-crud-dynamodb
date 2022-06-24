import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dynamoClient = new DynamoDBClient({
  apiVersion: "2012-08-10",
  region: 'us-east-2',
  endpoint: 'http://localhost:8000',
  credentials: {
    accessKeyId: "123456",
    secretAccessKey: "123456",
  }
});

const docClient = DynamoDBDocumentClient.from(dynamoClient);

export default docClient;
