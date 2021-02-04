import TimestampToRaceTime from '../../../formatters/TimestampToRaceTime';

describe('TimestampToRaceTime', () => {
  describe('if function receives a timestamp', () => {
    it('format timestamp to xx:xx:xxx', () => {
      const timestamp = 1612445077592;

      const subject = TimestampToRaceTime(timestamp);

      expect(subject).toEqual('24:37:592');
    });
  });

  describe('if timestamp does not exist ir is not valid', () => {
    it('return 0', () => {
      const timestamp = 'not a timestamp';

      const subject = TimestampToRaceTime(timestamp);

      expect(subject).toEqual(0);
    });
  });
});
