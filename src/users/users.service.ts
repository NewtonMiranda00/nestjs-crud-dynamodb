import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import User from './dto/User'
import { IUser } from "./models/User.js";

@Injectable()
export class UsersService {
  async findOne(id: Pick<IUser, 'id'>) {
    return User.findOne(id);
  }

  async findAll() {
    return User.findAll();
  }

  async create({ name, email }: IUser) {
    const id = uuidv4()
    return User.put({ id, name, email });
  }

  async put({ id, name, email }: Required<IUser>) {
    return User.put({ id, name, email });
  }

  async delete(id: Pick<IUser, 'id'>) {
    return User.delete(id);
  }
}