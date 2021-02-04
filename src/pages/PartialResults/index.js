import React from 'react';

import Button from '../../components/Button';
import RacerList from '../../components/RacerList';
import { useMainContext } from '../../providers/MainProvider';
import { PartialResultsProvider } from '../../providers/PartialResultsProvider';

import './styles.scss';

const PartialResults = () => {
  const { resetRace } = useMainContext();

  return (
    <div className="partial-results">
      <div className="btn-wrapper">
        <Button label="Restart" onClick={resetRace} />
      </div>

      <div className="main-block">
        <h2 className="main-block-title">Partial Results</h2>
        <RacerList />
      </div>
    </div>
  );
};

const PartialResultsWithController = () => (
  <PartialResultsProvider>
    <PartialResults />
  </PartialResultsProvider>
);

export default PartialResultsWithController;
