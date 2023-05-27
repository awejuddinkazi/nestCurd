"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor() {
        this.user = [];
    }
    findUserData() {
        return this.user;
    }
    create(data) {
        this.user.push(data);
        return data;
    }
    remove(id) {
        const userCheck = this.user.findIndex(d => d.id === id);
        if (userCheck !== -1) {
            const userdelete = this.user.splice(userCheck, 1);
            return userdelete[0];
        }
        return null;
    }
    update(id, updateuser) {
        const userCheck = this.user.findIndex(d => d.id === id);
        this.user[userCheck] = updateuser;
        return updateuser;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map