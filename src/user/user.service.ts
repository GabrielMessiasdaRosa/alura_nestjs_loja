import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { ListUserDto } from './dto/list-user.dto';
import { UserEntity } from './user.entity';

@Injectable() // 👈 Injectable decorator is a class decorator that defines a service, a service is a class that contains business logic and is instantiated within a module.
export class UserService {
  constructor(
    @InjectRepository(UserEntity) // 👈 InjectRepository decorator is a parameter decorator that injects a repository into a service
    private readonly userRepository: Repository<UserEntity>, // 👈 injects the UserEntity repository
  ) {} // 👈 constructor is a method that is called when a class is instantiated

  async listUsers(): Promise<ListUserDto[]> {
    // 👈 listUsers method
    const users = await this.userRepository.find(); // 👈 find all users, .find() is a typeorm method that returns all users
    const usersList: ListUserDto[] = users.map((user) => {
      // 👈 map over users and return a new array of ListUserDto objects
      const userDto = new ListUserDto(user.id, user.name);
      return userDto;
    });
    return usersList;
  }

  async getUser(id: string): Promise<ListUserDto> {
    // 👈 getUser method
    const user = await this.userRepository.findOneBy({ id }); // 👈 find user by id, .findOne() is a typeorm method that returns a single user
    const userDto = new ListUserDto(user.id, user.name); // 👈 create a new ListUserDto object with the id and name properties of the user object
    return userDto;
  }

  async createUser(user: CreateUserDto): Promise<void> {
    const newUser = new UserEntity(); // 👈 create a new UserEntity object
    newUser.name = user.name; // 👈 set the name property of the newUser object to the name property of the CreateUserDto object
    newUser.email = user.email; // 👈 set the email property of the newUser object to the email property of the CreateUserDto object
    newUser.password = user.password; // 👈 set the password property of the newUser object to the password property of the CreateUserDto object
    await this.userRepository.save(newUser); // 👈 save newUser to database
    return;
  }

  async updateUser(id: string, user: Partial<UserEntity>): Promise<void> {
    // 👈 updateUser method
    await this.userRepository.update(id, user); // 👈 update user with id with user object
    return;
  }

  async deleteUser(id: string): Promise<void> {
    // 👈 deleteUser method
    await this.userRepository.delete(id); // 👈 delete user with id
    return;
  }

  async emailAlreadyExists(email: UserEntity['email']): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { email } }); // 👈 find user by email
    return !!user; // 👈 return true if user exists
  }

  /*   private users: UserEntity[] = []; // 👈 users array memory storage

  async createUser(user: UserEntity) {
    // 👈 createUser method that accepts name, email, and password
    this.users.push(user); // 👈 push user object to users array, this will be replaced with a database call in the next chapter
  }

  async getUsers() {
    // 👈 getUsers method
    return this.users; // 👈 return users array
  }

  async emailAlreadyExists(email: UserEntity['email']) {
    // 👈 emailAlreadyExists method
    return this.users.some((user) => user.email === email); // 👈 return true if email exists in users array
  }

  async updateUser(id: string, user: Partial<UserEntity>) {
    // 👈 updateUser method
    const userIndex = this.users.findIndex((user) => user.id === id); // 👈 find index of user with id
    this.users[userIndex] = { ...this.users[userIndex], ...user }; // 👈 update user object with new user object
    return this.users[userIndex]; // 👈 return updated user object
  }

  async deleteUser(id: string) {
    // 👈 deleteUser method
    return (this.users = this.users.filter((user) => user.id !== id)); // 👈 filter out user with id
  } */
}
