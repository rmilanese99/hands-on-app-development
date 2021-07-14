import { Stats } from './stats';

export interface Pokemon {

  id: number;

  name: string;
  description: string;

  type: string[];

  stats: Stats;

  avatar: string;
}
