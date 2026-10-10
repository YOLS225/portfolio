import * as migration_20260716_123544_initial from './20260716_123544_initial';
import * as migration_20261010_100554_media_covers from './20261010_100554_media_covers';

export const migrations = [
  {
    up: migration_20260716_123544_initial.up,
    down: migration_20260716_123544_initial.down,
    name: '20260716_123544_initial',
  },
  {
    up: migration_20261010_100554_media_covers.up,
    down: migration_20261010_100554_media_covers.down,
    name: '20261010_100554_media_covers'
  },
];
