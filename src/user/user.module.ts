import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UniqEmailValidator } from "./validation/uniq-email.validator";

@Module({ // 👈 Module decorator is a class decorator that defines a module, a module encapsulates related functionality into a single unit.
    imports: [], // 👈 imports array is a list of modules that this module depends on.
    controllers: [UserController],  // 👈 controllers array is a list of controllers that are instantiated within this module.
    providers: [UserService, UniqEmailValidator], // 👈 providers array is a list of services that are instantiated within this module.
})
export class UserModule {} // 👈 UserModule class is a class that represents the module itself.