import MetersToKm from '../../../formatters/MetersToKm';

describe('MetersToKm', () => {
  describe('if meters exist and is a number', () => {
    it('return number in km', () => {
      const meters = 1000;

      const subject = MetersToKm(meters);

      expect(subject).toEqual(1);
    });
  });

  describe('if meters does not exits or is not a number', () => {
    it('return 0', () => {
      const meters = '1000';

      const subject = MetersToKm(meters);

      expect(subject).toEqual(0);
    });
  });
});
