import GetSpeedBetweenTwoCheckpoints from '../../../utils/GetSpeedBetweenTwoCheckpoints';

describe('GetSpeedBetweenTwoCheckpoints', () => {
  const trackLength = 1130;
  const raceStartTime = 1612446800000;

  describe('receives point A and B, track length, start time and B has position', () => {
    it('return speed correctly', () => {
      const pointA = {
        car: '2f8b447b-0749-4d21-8b47-b413ff8ce02c',
        timestamp: 1612448945576,
        position: 0,
      };

      const pointB = {
        car: '2f8b447b-0749-4d21-8b47-b413ff8ce02c',
        timestamp: 1612448961251,
        position: 130,
      };

      const subject = GetSpeedBetweenTwoCheckpoints({
        pointA,
        pointB,
        trackLength,
        raceStartTime,
      });

      expect(subject).toEqual('29.9');
    });
  });

  describe('receives point A and B, track length, start time but B position is zero', () => {
    it('uses the track length as b position and return speed correctly', () => {
      const pointA = {
        car: '2f8b447b-0749-4d21-8b47-b413ff8ce02c',
        timestamp: 1612449083273,
        position: 900,
      };

      const pointB = {
        car: '2f8b447b-0749-4d21-8b47-b413ff8ce02c',
        timestamp: 1612449111198,
        position: 0,
      };

      const subject = GetSpeedBetweenTwoCheckpoints({
        pointA,
        pointB,
        trackLength,
        raceStartTime,
      });

      expect(subject).toEqual('29.7');
    });
  });

  describe('receives only point B, track length, start time but B position is zero', () => {
    it('distance equals zero and race start time is used as point A timestamp', () => {
      const pointB = {
        car: '2f8b447b-0749-4d21-8b47-b413ff8ce02c',
        timestamp: 1612449111198,
        position: 0,
      };

      const subject = GetSpeedBetweenTwoCheckpoints({
        pointB,
        trackLength,
        raceStartTime,
      });

      expect(subject).toEqual('0.0');
    });
  });

  describe('point A and B are undefined', () => {
    it('return 0', () => {
      const subject = GetSpeedBetweenTwoCheckpoints({
        trackLength,
        raceStartTime,
      });

      expect(subject).toEqual('0.0');
    });
  });
});
