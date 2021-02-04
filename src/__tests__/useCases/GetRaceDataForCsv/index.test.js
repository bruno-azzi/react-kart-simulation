import GetRaceDataForCsv from '../../../useCases/GetRaceDataForCsv';
import finalClassification from '../../fixtures/racers/finalClassification.json';
import finalClassificationDataCsv from '../../fixtures/racers/finalClassificationDataCsv.json';

describe('GetRaceDataForCsv', () => {
  describe('if function receives array of racers', () => {
    it('return same array but with the empty names filled', () => {
      const racers = finalClassification;

      const subject = GetRaceDataForCsv(racers);

      expect(subject).toEqual(finalClassificationDataCsv);
    });
  });
});
