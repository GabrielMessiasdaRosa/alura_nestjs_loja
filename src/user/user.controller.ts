import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("/users") // 👈 Route path @Controller is a decorator that defines a controller that will handle requests for a specific route path.
export class UserController {
   /*  private userService = new UserService(); */ // 👈 Create an instance of the UserService class

    constructor(private userService: UserService) {} // 👈 Dependency injection in the constructor to inject the UserService instance into the UserController class.

    @Post() // 👈 Route handler @Post is a decorator that defines a route handler for POST requests to the route path defined by the @Controller decorator. 
    async createUser(@Body() body: CreateUserDto) { // 👈 Route handler method that accepts a CreateUserDto object as the request body.
        // create user
        return this.userService.createUser( // 👈 Response 
            body.name,
            body.email,
            body.password
        );  
    }

    @Get()
    async getUsers() {
        // get users
        return this.userService.getUsers(); // 👈 Response 
    }

}
