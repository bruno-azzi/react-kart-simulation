import GetRacerCurrentLap from '../../../useCases/GetRacerCurrentLap';
import racerWithCheckpoints from '../../fixtures/racers/racerWithCheckpoints.json';

describe('GetRacerCurrentLap', () => {
  describe('if function receives racer with checkpoints', () => {
    it('return racer current lap number', () => {
      const racer = racerWithCheckpoints;

      const subject = GetRacerCurrentLap(racer);

      expect(subject).toEqual(3);
    });
  });

  describe('if function receives racer without checkpoints', () => {
    it('return 0 as current lap', () => {
      const racer = {
        checkpoints: [
          {
            lapsPassed: [],
          },
        ],
      };

      const subject = GetRacerCurrentLap(racer);

      expect(subject).toEqual(0);
    });
  });
});
