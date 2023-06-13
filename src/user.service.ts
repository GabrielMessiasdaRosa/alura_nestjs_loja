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

}