import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { AppService } from './app.service.js';
import { UserService } from './services/user/user.service.js';
import { UserDto } from './userDto/user.dto.js';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from './guard/auth/auth.guard.js';

@Controller()
@UsePipes(ValidationPipe)
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @UseGuards(AuthGuard)
  create(@Body() data: any) {
    return data;
  }

  @Post()
  async createUser(@Body() userData: UserDto) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    this.userService.createUser({
      name: userData.name,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    });

    return {
      message: 'User created successfully',
    };
  }

  @Get()
  getAllusers(): UserDto[] {
    return this.userService.getAllUsers();
  }
}
