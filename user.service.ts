import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private user = [];
  findUserData() {
    return this.user;
  }

  create(data: any) {
    this.user.push(data);
    return data;
  }

  remove(id: string) {
    // eslint-disable-next-line prettier/prettier
    const userCheck = this.user.findIndex(d => d.id === id);
    if (userCheck !== -1) {
      const userdelete = this.user.splice(userCheck, 1);
      return userdelete[0];
    }
    return null;
  }

  update(id: string, updateuser: any) {
    // eslint-disable-next-line prettier/prettier
    const userCheck = this.user.findIndex(d => d.id === id);
    this.user[userCheck] = updateuser;
    return updateuser;
  }
}
