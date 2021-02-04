import GetRacerBestLap from '../../../useCases/GetRacerBestLap';
import racerWithCheckpoints from '../../fixtures/racers/racerWithCheckpoints.json';

describe('GetRacerBestLap', () => {
  describe('if function receives racer with checkpoints', () => {
    it('return racer best lap and best lap time', () => {
      const racer = racerWithCheckpoints;

      const subject = GetRacerBestLap(racer);

      expect(subject).toEqual({ lapNumber: 1, lapTime: 70000 });
    });
  });
});
