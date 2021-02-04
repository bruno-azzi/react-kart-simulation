/* eslint-disable react-hooks/exhaustive-deps */

import React, { createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useMainContext } from '../MainProvider';
import GetRacerBestLap from '../../useCases/GetRacerBestLap';
import GetTimeDiffFromTwoRacers from '../../useCases/GetTimeDiffFromTwoRacers';

const RaceClassificationContext = createContext({});

const RaceClassificationProvider = ({ children }) => {
  const { racers, setRacers } = useMainContext();

  const getFinalResults = () => {
    const updatedRacers = racers.map((racer, index) => ({
      ...racer,
      bestLapNumber: GetRacerBestLap(racer).lapNumber,
      bestLapTime: GetRacerBestLap(racer).lapTime,
      timeDiffFromLeader: GetTimeDiffFromTwoRacers({
        racerA: racer,
        racerB: racers[0],
      }),
      timeDiffFromAntecessorRacer: GetTimeDiffFromTwoRacers({
        racerA: racer,
        racerB: racers[index - 1],
      }),
    }));

    setRacers(updatedRacers);
  };

  useEffect(() => {
    getFinalResults();
  }, []);

  return (
    <RaceClassificationContext.Provider value={{}}>
      {children}
    </RaceClassificationContext.Provider>
  );
};

RaceClassificationProvider.propTypes = {
  children: PropTypes.node,
};

RaceClassificationProvider.defaultProps = {
  children: undefined,
};

const useRaceClassificationContext = () =>
  useContext(RaceClassificationContext);

export { RaceClassificationProvider, useRaceClassificationContext };
