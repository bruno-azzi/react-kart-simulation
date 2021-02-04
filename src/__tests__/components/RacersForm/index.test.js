import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';

import RacersForm from '../../../components/RacersForm';
import * as MainProvider from '../../../providers/MainProvider';
import * as HomeProvider from '../../../providers/HomeProvider';
import finalClassification from '../../fixtures/racers/finalClassification.json';

const racers = finalClassification;
const handleInputChange = jest.fn();

const mountWrapper = ({ racers, handleInputChange, loadingSettings }) => {
  jest.spyOn(MainProvider, 'useMainContext').mockImplementation(() => {
    return {
      racers,
    };
  });

  jest.spyOn(HomeProvider, 'useHomeContext').mockImplementation(() => {
    return {
      handleInputChange,
      loadingSettings,
    };
  });

  return render(<RacersForm />);
};

describe('Render RacersForm component', () => {
  describe('if is loadingSettings is true', () => {
    it('render the loader instead of the form', () => {
      mountWrapper({ loadingSettings: true });

      const loader = screen.getByTestId('loader');
      expect(loader).toBeInTheDocument();

      const racerInput = screen.queryByTestId('racerInput');
      expect(racerInput).not.toBeInTheDocument();
    });
  });

  describe('if it is not loading and there are racers', () => {
    it('render the racer name inputs', () => {
      mountWrapper({ loadingSettings: false, racers, handleInputChange });

      const fieldsWrapper = screen.getByTestId('fieldsWrapper');
      expect(fieldsWrapper.children.length).toEqual(racers.length);

      const input = screen.getByTestId('racer_1');

      fireEvent.change(input, { target: { value: '12345' } });

      expect(handleInputChange).toHaveBeenCalled();
    });
  });
});
