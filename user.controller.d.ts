import { UserService } from './user.service';
export declare class UserController {
    private readonly userdetail;
    constructor(userdetail: UserService);
    findUserData(): any[];
    create(user: any): any;
    remove(id: string): any;
    update(id: string, user: any): any;
}
