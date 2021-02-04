import FillEmptyRacerNames from '../../../utils/FillEmptyRacerNames';
import emptyNameRacers from '../../fixtures/racers/emptyNameRacers.json';
import filledNameRacers from '../../fixtures/racers/filledNameRacers.json';

describe('FillEmptyRacersName', () => {
  describe('if function receives array of racers', () => {
    it('return same array but with the empty names filled', () => {
      const racers = emptyNameRacers;

      const subject = FillEmptyRacerNames(racers);

      expect(subject).toEqual(filledNameRacers);
    });
  });

  describe('if function receives an empty array of racers', () => {
    it('return same array', () => {
      const racers = [];

      const subject = FillEmptyRacerNames(racers);

      expect(subject).toEqual(racers);
    });
  });
});
