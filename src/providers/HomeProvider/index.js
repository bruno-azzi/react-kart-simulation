/* eslint-disable react-hooks/exhaustive-deps */

import React, {
  createContext,
  createRef,
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import { useMainContext } from '../MainProvider';
import { PARTIAL_RESULTS_ROUTE } from '../../routes';
import { ShowSuccessToast } from '../../components/Toast';
import FillEmptyRacerNames from '../../utils/FillEmptyRacerNames';
import { fetchRaceSettings, initializeRace } from '../../services/Race';

const HomeContext = createContext({});

const HomeProvider = ({ children }) => {
  const [lapsErrors, setLapsErrors] = useState([]);
  const [loadingSettings, setLoadingSettings] = useState(false);
  const lapsInputRef = createRef();
  const history = useHistory();
  const {
    raceSettings,
    setRaceSettings,
    racers,
    setRacers,
    laps,
    setLaps,
    setStarted,
  } = useMainContext();
  const requiredLapsError = {
    id: 'required',
    message: 'Enter a valid number of laps',
  };

  const initRacersData = (cars) => {
    const racersArray = cars.map((id, index) => ({
      id,
      name: '',
      currentLap: 0,
      currentSpeed: 0,
      averageSpeed: 0,
      startingPlace: index + 1,
      distance: 0,
      totalTime: 0,
      bestLapNumber: 0,
      bestLapTime: 0,
      timeDiffFromLeader: 0,
      timeDiffFromAntecessorRacer: 0,
    }));

    return racersArray;
  };

  const handleRaceSettings = (settings) => {
    const updatedRacers = initRacersData(settings.cars);

    setRacers(updatedRacers);
    setRaceSettings(settings);
  };

  useEffect(() => {
    const getRaceSettings = () => {
      setLoadingSettings(true);

      fetchRaceSettings()
        .then((response) => {
          handleRaceSettings(response.data.payload);
          setLoadingSettings(false);
        })
        .catch(() => {
          setLoadingSettings(false);
        });
    };

    getRaceSettings();
  }, []);

  const handleInputChange = ({ id, name }) => {
    const newArray = racers.map((racer) => {
      if (id === racer.id) {
        racer.name = name;
      }

      return racer;
    });

    setRacers(newArray);
  };

  const startRace = async () => {
    if (!laps || !(laps > 0) || loadingSettings) {
      lapsInputRef.current.focus();
      setLapsErrors([requiredLapsError]);
    } else {
      await initializeRace()
        .then(() => {
          setRacers(FillEmptyRacerNames(racers));
          setLapsErrors([]);
          setRaceSettings({
            ...raceSettings,
            laps: +laps,
            raceStartTime: Date.now(),
          });
          setStarted(true);
          ShowSuccessToast('Race started!');
          history.push(PARTIAL_RESULTS_ROUTE);
        })
        .catch(() => {});
    }
  };

  const onChangeNumberOfLaps = (value) => {
    const formattedValue = value.replace(/[^0-9]/g, '');
    setLaps(formattedValue);

    if (!+formattedValue) {
      setLapsErrors([requiredLapsError]);
    } else {
      setLapsErrors([]);
    }
  };

  return (
    <HomeContext.Provider
      value={{
        racers,
        setRacers,
        laps,
        setLaps,
        lapsInputRef,
        lapsErrors,
        handleInputChange,
        onChangeNumberOfLaps,
        startRace,
        loadingSettings,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

HomeProvider.propTypes = {
  children: PropTypes.node,
};

HomeProvider.defaultProps = {
  children: undefined,
};

const useHomeContext = () => useContext(HomeContext);

export { HomeProvider, useHomeContext };
