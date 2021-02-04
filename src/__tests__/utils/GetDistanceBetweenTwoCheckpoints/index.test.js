import GetDistanceBetweenTwoCheckpoints from '../../../utils/GetDistanceBetweenTwoCheckpoints';

describe('GetDistanceBetweenTwoCheckpoints', () => {
  describe('if function all props correctly', () => {
    it('return point B - point A', () => {
      const a = 200;
      const b = 1000;
      const trackLength = 2000;
      const result = 800;

      const subject = GetDistanceBetweenTwoCheckpoints({
        pointA: a,
        pointB: b,
        trackLength,
      });

      expect(subject).toEqual(result);
    });
  });

  describe('if point B equals zero', () => {
    it('return track length - point A', () => {
      const a = 200;
      const b = 0;
      const trackLength = 2000;
      const result = 1800;

      const subject = GetDistanceBetweenTwoCheckpoints({
        pointA: a,
        pointB: b,
        trackLength,
      });

      expect(subject).toEqual(result);
    });
  });
});
