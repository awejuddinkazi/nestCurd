import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userdetail: UserService) {}

  @Get()
  findUserData() {
    return this.userdetail.findUserData();
  }

  @Post()
  create(@Body() user: any) {
    return this.userdetail.create(user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userdetail.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: any) {
    return this.userdetail.update(id, user);
  }
}
