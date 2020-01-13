import { Injectable } from '@nestjs/common';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

@Injectable()
export class UserService {
  private db;

  constructor() {
    const adapter = new FileSync('db.json');
    this.db = low(adapter);
  }

  getByCredentials(username: string, password: string) {
    return this.db
      .get('users')
      .find({ username, password })
      .value();
  }

  getByName(username: string) {
    return this.db
      .get('users')
      .find({ username })
      .value();
  }
}
