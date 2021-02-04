import SortRacersByLowestTotalTime from '../../../utils/SortRacersByLowestTotalTime';

import racersWithTotalTime from '../../fixtures/racers/racersWithTotalTime.json';
import racersWithTotalTimeSorted from '../../fixtures/racers/racersWithTotalTimeSorted.json';

describe('SortRacersByLowestTotalTime', () => {
  describe('if receives array of racers with total time', () => {
    it('return racers sorted by lowest total time', () => {
      const racers = racersWithTotalTime;

      const subject = SortRacersByLowestTotalTime(racers);

      expect(subject).toEqual(racersWithTotalTimeSorted);
    });
  });
});
