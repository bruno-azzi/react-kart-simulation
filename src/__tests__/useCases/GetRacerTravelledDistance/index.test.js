import GetRacerTravelledDistance from '../../../useCases/GetRacerTravelledDistance';
import racerWithCheckpoints from '../../fixtures/racers/racerWithCheckpoints.json';

describe('GetRacerTravelledDistance', () => {
  describe('if function receives racer with checkpoints', () => {
    it('return racer total distance travelled', () => {
      const racer = racerWithCheckpoints;
      const trackLength = 1130;

      const subject = GetRacerTravelledDistance({
        racer,
        trackLength,
      });

      expect(subject).toEqual(4290);
    });
  });

  describe('if function dont receives racer or a racer without checkpoints', () => {
    it('return 0 as total distance travelled', () => {
      const trackLength = 1130;

      const subject = GetRacerTravelledDistance({
        trackLength,
      });

      expect(subject).toEqual(0);
    });
  });
});
