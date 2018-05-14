// @flow

import { Identifiable } from '../entities/Identifiable';

export interface StoreInterface<Identifiable> {
  get(id: string): ?Identifiable;
  set(value: Identifiable): any;
  unset(id: string): any;
}
