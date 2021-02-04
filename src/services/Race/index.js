import api from '../../config/api';

export const API_SETTINGS_URL = 'settings';
export const API_START_URL = 'start';
export const API_CHECKPOINTS_URL = 'checkpoints';
export const API_STOP_URL = 'stop';

const fetchRaceSettings = () => {
  return api.get(API_SETTINGS_URL);
};

const initializeRace = () => {
  return api.post(API_START_URL);
};

const fetchRaceCheckpoints = () => {
  return api.get(API_CHECKPOINTS_URL);
};

const stopRace = () => {
  return api.post(API_STOP_URL);
};

export { fetchRaceSettings, initializeRace, fetchRaceCheckpoints, stopRace };
