import React from 'react';
import {
  screen,
  render,
  getByTestId,
  getAllByTestId,
} from '@testing-library/react';

import RacerList from '../../../components/RacerList';
import * as MainProvider from '../../../providers/MainProvider';
import finalClassification from '../../fixtures/racers/finalClassification.json';

const racers = finalClassification;
const laps = 1;

const mountWrapper = ({ racers, laps, showWinners = false }) => {
  jest.spyOn(MainProvider, 'useMainContext').mockImplementation(() => {
    return {
      racers,
      laps,
    };
  });

  return render(<RacerList showWinners={showWinners} />);
};

describe('Render RacerList component', () => {
  describe('when loaded', () => {
    it('render the racer list', () => {
      mountWrapper({ racers, laps });

      const list = screen.getByRole('list');
      expect(list.children.length).toEqual(racers.length);
    });
  });

  describe('when loaded with showWinners prop', () => {
    it('render the racer list', () => {
      mountWrapper({ racers, laps, showWinners: true });

      const list = screen.getByRole('list');
      expect(list.children.length).toEqual(racers.length);
      expect(list).toHaveClass('show-winners');
    });
  });
});
