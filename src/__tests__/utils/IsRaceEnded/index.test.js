import IsRaceEnded from '../../../utils/IsRaceEnded';

import racersWithCurrentLap from '../../fixtures/racers/racersWithCurrentLap.json';
import racersWithMaxCurrentLap from '../../fixtures/racers/racersWithMaxCurrentLap.json';

describe('IsRaceEnded', () => {
  describe('if all racers current lap equals max laps amount', () => {
    it('return true', () => {
      const racers = racersWithMaxCurrentLap;
      const laps = 3;

      const subject = IsRaceEnded({ racers, laps });

      expect(subject).toEqual(true);
    });
  });

  describe('if atleast one racer current lap doenst not equals max laps amount', () => {
    it('return false', () => {
      const racers = racersWithCurrentLap;
      const laps = 3;

      const subject = IsRaceEnded({ racers, laps });

      expect(subject).toEqual(false);
    });
  });
});
