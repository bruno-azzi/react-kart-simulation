import GetRacerCheckpointLogsSorted from '../../../utils/GetRacerCheckpointLogsSorted';

import racerWithCheckpoints from '../../fixtures/racers/racerWithCheckpoints.json';
import checkpointLogsSorted from '../../fixtures/racers/checkpointLogsSorted.json';

describe('GetRacerCheckpointLogsSorted', () => {
  describe('if function receives racer with checkpoints', () => {
    it('return array of checkpoints sorted by time', () => {
      const racer = racerWithCheckpoints;

      const subject = GetRacerCheckpointLogsSorted(racer);

      expect(subject).toEqual(checkpointLogsSorted);
    });
  });

  describe('if function receives racer without checkpoints', () => {
    it('return empty array', () => {
      const racer = {};

      const subject = GetRacerCheckpointLogsSorted(racer);

      expect(subject).toEqual([]);
    });
  });
});
