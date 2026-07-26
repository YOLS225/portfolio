import * as migration_20260716_123544_initial from './20260716_123544_initial';

export const migrations = [
  {
    up: migration_20260716_123544_initial.up,
    down: migration_20260716_123544_initial.down,
    name: '20260716_123544_initial'
  },
];
