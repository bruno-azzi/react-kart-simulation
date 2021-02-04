import GetTimeDiffFromTwoRacers from '../../../useCases/GetTimeDiffFromTwoRacers';

describe('GetTimeDiffFromTwoRacers', () => {
  describe('if function receives racerA and racerB with total lap time', () => {
    it('return the difference of time between them', () => {
      const racerA = {
        totalTime: 105000,
      };

      const racerB = {
        totalTime: 100000,
      };

      const subject = GetTimeDiffFromTwoRacers({
        racerA,
        racerB,
      });

      expect(subject).toEqual(5000);
    });
  });

  describe('if racerA and racerB does not exist or does not have total time', () => {
    it('return 0', () => {
      const racerA = {};

      const racerB = {};

      const subject = GetTimeDiffFromTwoRacers({
        racerA,
        racerB,
      });

      expect(subject).toEqual(0);
    });
  });
});
