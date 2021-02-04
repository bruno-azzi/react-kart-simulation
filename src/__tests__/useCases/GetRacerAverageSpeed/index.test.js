import GetRacerAverageSpeed from '../../../useCases/GetRacerAverageSpeed';
import racerWithCheckpoints from '../../fixtures/racers/racerWithCheckpoints.json';

describe('GetRacerAverageSpeed', () => {
  describe('if function receives array of racers', () => {
    it('return same array but with the empty names filled', () => {
      const racer = racerWithCheckpoints;
      const raceStartTime = 10000;
      const trackLength = 1130;

      const subject = GetRacerAverageSpeed({
        racer,
        raceStartTime,
        trackLength,
      });

      expect(subject).toEqual('32.8');
    });
  });

  describe('if function dont receive racer he does not have checkpoints', () => {
    it('return average speed of 0', () => {
      const raceStartTime = 10000;
      const trackLength = 1130;

      const subject = GetRacerAverageSpeed({
        raceStartTime,
        trackLength,
      });

      expect(subject).toEqual('0.0');
    });
  });
});
