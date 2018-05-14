// @flow

import { Identifiable } from './Identifiable';

export default class Dream implements Identifiable {
  id: string;
  created_at: Date;
  value: string;
}
