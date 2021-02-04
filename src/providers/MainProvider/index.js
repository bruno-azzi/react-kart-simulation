/* eslint-disable react-hooks/exhaustive-deps */

import React, { createContext, useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Loader from '../../components/Loader';
import { PARTIAL_RESULTS_ROUTE, RACE_CLASSIFICATION_ROUTE } from '../../routes';

const MainContext = createContext({});

const MainProvider = ({ children }) => {
  const [laps, setLaps] = useState();
  const [racers, setRacers] = useState();
  const [ended, setEnded] = useState(false);
  const [started, setStarted] = useState(false);
  const [raceSettings, setRaceSettings] = useState();
  const [globalLoader, setGlobalLoader] = useState(true);
  const [checkpointLogs, setCheckpointLogs] = useState([]);
  const history = useHistory();

  const resetRace = () => {
    setRaceSettings();
    setRacers();
    setLaps();
    setCheckpointLogs();
    setEnded(false);
    setStarted(false);
    history.push('/');
    localStorage.clear();
  };

  useEffect(() => {
    const verifySavedRaceSettings = () => {
      const settings = JSON.parse(localStorage.getItem('raceSettings'));
      const racerList = JSON.parse(localStorage.getItem('racers'));
      const raceEnded = JSON.parse(localStorage.getItem('raceEnded'));
      const raceStarted = JSON.parse(localStorage.getItem('raceStarted'));

      if (settings && racerList && raceStarted) {
        setLaps(+settings.laps);
        setRacers(racerList);
        setRaceSettings(settings);
        setEnded(raceEnded);
        setStarted(raceStarted);

        if (raceEnded) {
          history.push(RACE_CLASSIFICATION_ROUTE);
        } else {
          history.push(PARTIAL_RESULTS_ROUTE);
        }
      } else {
        history.push('/');
        resetRace();
      }

      setGlobalLoader(false);
    };

    verifySavedRaceSettings();
  }, []);

  useEffect(() => {
    localStorage.setItem('racers', JSON.stringify(racers ? racers : null));
  }, [racers]);

  useEffect(() => {
    localStorage.setItem(
      'raceSettings',
      JSON.stringify(raceSettings ? raceSettings : null),
    );
  }, [raceSettings]);

  useEffect(() => {
    localStorage.setItem('raceEnded', ended ? ended : null);
  }, [ended]);

  useEffect(() => {
    localStorage.setItem('raceStarted', started ? started : null);
  }, [started]);

  return (
    <MainContext.Provider
      value={{
        raceSettings,
        setRaceSettings,
        racers,
        setRacers,
        laps,
        setLaps,
        checkpointLogs,
        setCheckpointLogs,
        ended,
        setEnded,
        started,
        setStarted,
        resetRace,
      }}
    >
      {globalLoader ? <Loader absolute /> : children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node,
};

MainProvider.defaultProps = {
  children: undefined,
};

const useMainContext = () => useContext(MainContext);

export { MainProvider, useMainContext };
