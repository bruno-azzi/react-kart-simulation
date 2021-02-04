import GetRacerTotalTime from '../../../useCases/GetRacerTotalTime';
import racerWithCheckpoints from '../../fixtures/racers/racerWithCheckpoints.json';

describe('GetRacerTotalTime', () => {
  describe('if function receives racer with checkpoints', () => {
    it('return racer total race time', () => {
      const racer = racerWithCheckpoints;
      const raceStartTime = 1612446855332;

      const subject = GetRacerTotalTime({
        racer,
        raceStartTime,
      });

      expect(subject).toEqual(1510000);
    });
  });

  describe('if function dont receives racer or a racer without checkpoints', () => {
    it('return 0 as total race time', () => {
      const raceStartTime = 1612446855332;

      const subject = GetRacerTotalTime({
        raceStartTime,
      });

      expect(subject).toEqual(0);
    });
  });
});
