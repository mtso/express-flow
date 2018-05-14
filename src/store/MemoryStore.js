// @flow

import { Identifiable } from '../entities/Identifiable';
import { StoreInterface } from './StoreInterface';
import { GetAllInterface } from './GetAllInterface';

export default class MemoryStore
implements StoreInterface<Identifiable>, GetAllInterface<Identifiable> {
  store: Array<Identifiable>;

  constructor() {
    this.store = [];
  }

  get(id: string): ?Identifiable {
    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i].id === id) {
        return this.store[i];
      }
    }

    return null;
  }

  set(value: Identifiable) {
    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i].id === value.id) {
        this.store[i] = value;
        return;
      }
    }
    this.store.push(value);
  }

  unset(id: string) {
    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i].id === id) {
        this.store.splice(i, 1);
      }
    }
  }

  getAll(): Array<Identifiable> {
    return this.store;
  }
}
