import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class IonicStorageService {
  private sqlMode = false;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.storage = storage;
  }

  async store(key: any, model: any) {
    const value = await this.storage.get(key);
    if (value === null) {
      this.storage.set(key, model);
    } else {
      this.storage.remove(key);
      this.storage.set(key, model);
    }
    return value;
  }

  async remove(key: any) {
    await this.storage.remove(key);
  }

  async get(key: any) {
    const value = await this.storage.get(key.toString());
    return value;
  }

  async clear() {
    const value = await this.storage.clear();
    return value;
  }
}
