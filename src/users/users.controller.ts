import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { IUser } from "./models/User.js";
import { UsersService } from "./users.service.js";

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  async findOne(@Param('id') id: Pick<IUser, "id">) {
    const user = await this.userService.findOne(id);

    return user ? user : { error: 'This ID does not exist' }
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  async create(
    @Body('name') name: string,
    @Body('email') email: string
  ) {
    
    return await this.userService.create({ name, email });
  }
  
  @Put(':id')
  async put(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('email') email: string
  ) {
    return await this.userService.put({ id, name, email });
  }

  @Delete(':id')
  async delete(@Param('id') id: Pick<IUser, "id">) {
    return await this.userService.delete(id);
  }
}