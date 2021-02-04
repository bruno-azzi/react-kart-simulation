import MillisecondsToHours from '../../../formatters/MillisecondsToHours';

describe('MillisecondsToHours', () => {
  describe('if milliseconds exist and is a number', () => {
    it('convert milliseconds to hours', () => {
      const milliseconds = 1000000;

      const subject = MillisecondsToHours(milliseconds);

      expect(subject).toEqual(0.2777777777777778);
    });
  });

  describe('if milliseconds does not exits or is not a number', () => {
    it('return 0', () => {
      const milliseconds = '1000000';

      const subject = MillisecondsToHours(milliseconds);

      expect(subject).toEqual(0);
    });
  });
});
