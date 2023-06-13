import { Injectable } from "@nestjs/common";

@Injectable() // 👈 Injectable decorator is a class decorator that defines a service, a service is a class that contains business logic and is instantiated within a module.
export class UserService {
    private users = []; // 👈 users array memory storage

    async createUser(name: string, email: string, password: string) { // 👈 createUser method that accepts name, email, and password
        const user = { // 👈 user object
            name,
            email,
            password
        };
        this.users.push(user); // 👈 push user object to users array, this will be replaced with a database call in the next chapter
        return user; // 👈 return user object
    }

    async getUsers() { // 👈 getUsers method
        return this.users; // 👈 return users array
    }

    async emailAlreadyExists(email: string) { // 👈 emailAlreadyExists method
        return this.users.some(user => user.email === email); // 👈 return true if email exists in users array
    }
}