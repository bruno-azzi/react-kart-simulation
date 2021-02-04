/* eslint-disable react-hooks/exhaustive-deps */

import React, { createContext, useContext, useEffect } from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { useMainContext } from '../MainProvider';
import IsRaceEnded from '../../utils/IsRaceEnded';
import { RACE_CLASSIFICATION_ROUTE } from '../../routes';
import { ShowSuccessToast } from '../../components/Toast';
import GetRacerTotalTime from '../../useCases/GetRacerTotalTime';
import GetRacerCurrentLap from '../../useCases/GetRacerCurrentLap';
import SortRacersByDistance from '../../utils/SortRacersByDistance';
import { fetchRaceCheckpoints, stopRace } from '../../services/Race';
import GetRacerCurrentSpeed from '../../useCases/GetRacerCurrentSpeed';
import GetRacerAverageSpeed from '../../useCases/GetRacerAverageSpeed';
import GetRacerTravelledDistance from '../../useCases/GetRacerTravelledDistance';
import SortRacersByLowestTotalTime from '../../utils/SortRacersByLowestTotalTime';

let interval;

const PartialResultsContext = createContext({});

const PartialResultsProvider = ({ children }) => {
  const intervalTime = 3000;
  const history = useHistory();
  const {
    laps,
    racers,
    setRacers,
    raceSettings,
    setCheckpointLogs,
    ended,
    setEnded,
  } = useMainContext();

  const handleRacersData = () => {
    const updatedRacers = racers.map((racer) => {
      return {
        ...racer,
        currentLap: GetRacerCurrentLap(racer),
        currentSpeed: GetRacerCurrentSpeed({
          racer,
          trackLength: raceSettings.track_length,
          raceStartTime: raceSettings.raceStartTime,
        }),
        averageSpeed: GetRacerAverageSpeed({
          racer,
          trackLength: raceSettings.track_length,
          raceStartTime: raceSettings.raceStartTime,
        }),
        distance: GetRacerTravelledDistance({
          racer,
          trackLength: raceSettings.track_length,
        }),
        totalTime: GetRacerTotalTime({
          racer,
          raceStartTime: raceSettings.raceStartTime,
        }),
      };
    });

    handleRacersPosition(updatedRacers);
  };

  const handleRacersPosition = (updatedRacers) => {
    const sortedRacers = SortRacersByDistance(updatedRacers);

    setRacers(sortedRacers);

    if (IsRaceEnded({ racers: sortedRacers, laps })) {
      endRace(sortedRacers);
    }
  };

  const setCheckpointsInRacersArray = (checkPointListLog) => {
    const racerCheckpointsPassed = racers.map((racer) => {
      racer.checkpoints = checkPointListLog.map((checkpoint) => {
        checkpoint.lapsPassed = checkpoint.log.filter((logItem) => {
          if (logItem.car === racer.id) {
            return logItem;
          }

          return null;
        });

        return (({ id, lapsPassed, position }) => ({
          id,
          lapsPassed:
            id === 'sensor-0'
              ? lapsPassed.slice(0, laps + 1)
              : lapsPassed.slice(0, laps),
          position,
        }))(checkpoint);
      });

      return racer;
    });

    setRacers(racerCheckpointsPassed);
    handleRacersData();
  };

  const prepareFinalRanking = (updatedRacers) => {
    const sortedRacers = SortRacersByLowestTotalTime(updatedRacers);

    setRacers(sortedRacers);
  };

  const endRace = async (updatedRacers) => {
    setEnded(true);

    await stopRace()
      .then(() => {
        prepareFinalRanking(updatedRacers);
        ShowSuccessToast('Race ended!');
        history.push(RACE_CLASSIFICATION_ROUTE);
      })
      .catch(() => {});
  };

  useEffect(() => {
    clearInterval(interval);
    localStorage.setItem('blockCheckpointRequests', false);

    const getRaceCheckpoints = () => {
      const blockCheckpointRequests = JSON.parse(
        localStorage.getItem('blockCheckpointRequests'),
      );

      if (!ended || !blockCheckpointRequests) {
        fetchRaceCheckpoints()
          .then((response) => {
            const checkpoints = response.data.payload;
            setCheckpointLogs(checkpoints);
            setCheckpointsInRacersArray(checkpoints);
          })
          .catch(() => {
            clearInterval(interval);
          });
      } else {
        clearInterval(interval);
      }
    };

    if (!ended) {
      getRaceCheckpoints();

      interval = setInterval(() => {
        getRaceCheckpoints();
      }, intervalTime);
    }
  }, [ended]);

  return (
    <PartialResultsContext.Provider value={{}}>
      {children}
    </PartialResultsContext.Provider>
  );
};

PartialResultsProvider.propTypes = {
  children: PropTypes.node,
};

PartialResultsProvider.defaultProps = {
  children: undefined,
};

const usePartialResultsContext = () => useContext(PartialResultsContext);

export { PartialResultsProvider, usePartialResultsContext };
