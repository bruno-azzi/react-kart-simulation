import SortRacersByDistance from '../../../utils/SortRacersByDistance';

import racersWithDistance from '../../fixtures/racers/racersWithDistance.json';
import racersWithDistanceSorted from '../../fixtures/racers/racersWithDistanceSorted.json';

describe('SortRacersByDistance', () => {
  describe('if receives array of racers with distance', () => {
    it('return racers sorted by distance', () => {
      const racers = racersWithDistance;

      const subject = SortRacersByDistance(racers);

      expect(subject).toEqual(racersWithDistanceSorted);
    });
  });
});
