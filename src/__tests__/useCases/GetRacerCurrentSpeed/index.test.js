import GetRacerCurrentSpeed from '../../../useCases/GetRacerCurrentSpeed';
import racerWithCheckpoints from '../../fixtures/racers/racerWithCheckpoints.json';

describe('GetRacerCurrentSpeed', () => {
  describe('if function receives racer with checkpoints', () => {
    it('return racer current lap number', () => {
      const racer = racerWithCheckpoints;
      const raceStartTime = 1612446855332;
      const trackLength = 1130;

      const subject = GetRacerCurrentSpeed({
        racer,
        raceStartTime,
        trackLength,
      });

      expect(subject).toEqual('6.8');
    });
  });

  describe('if function dont receives racer or there is no checkpoints', () => {
    it('return 0 as current speed', () => {
      const raceStartTime = 1612446855332;
      const trackLength = 1130;

      const subject = GetRacerCurrentSpeed({
        raceStartTime,
        trackLength,
      });

      expect(subject).toEqual('0.0');
    });
  });
});
