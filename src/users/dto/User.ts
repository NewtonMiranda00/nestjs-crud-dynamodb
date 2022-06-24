import { ScanCommand, DeleteCommand, DeleteCommandInput, GetCommand, GetCommandInput, PutCommand, PutCommandInput, ScanCommandInput } from "@aws-sdk/lib-dynamodb";
import docClient from "src/database/client";
import { IUser } from "../models/User";

class User {
  async findOne(id: Pick<IUser, 'id'>) {
    const getUsersParams: GetCommandInput = {
      TableName: 'Users',
      Key: {
        PK: 'USERS',
        SK: id
      }
    }

    return (await (docClient.send(new GetCommand(getUsersParams)))).Item;
  }
  
  async findAll() {
    const getUsersParams: ScanCommandInput = {
      TableName: 'Users'
    };

    return (await docClient.send(new ScanCommand(getUsersParams))).Items;
  }
  
  async put(user: Required<IUser>) {
    const putUserParams: PutCommandInput = {
      TableName: 'Users',
      Item: {
        PK: 'USERS',
        SK: user.id,
        name: user.name,
        email: user.email
      }
    };

    return await docClient.send(new PutCommand(putUserParams));
  }
  
  async delete(id: Pick<IUser, 'id'>) {
    const deleteUserParams: DeleteCommandInput = {
      TableName: 'Users',
      Key: {
        PK: 'USERS',
        SK: id
      }
    }

    return docClient.send(new DeleteCommand(deleteUserParams));
  }
}

export default new User();

