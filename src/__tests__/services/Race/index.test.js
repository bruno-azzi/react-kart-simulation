import {
  stopRace,
  initializeRace,
  fetchRaceSettings,
  fetchRaceCheckpoints,
  API_STOP_URL,
  API_START_URL,
  API_SETTINGS_URL,
  API_CHECKPOINTS_URL,
} from '../../../services/Race';
import api from '../../../config/api';
import raceSettingsResponse from '../../fixtures/services/raceSettingsResponse.json';
import raceCheckpointsResponse from '../../fixtures/services/raceCheckpointsResponse.json';

describe('Race service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    api.get = jest.fn();
    api.post = jest.fn();
  });

  describe('.fetchRaceSettings', () => {
    describe('when request is successfully', () => {
      it('returns the server response', async () => {
        api.get.mockResolvedValue(raceSettingsResponse);
        const subject = await fetchRaceSettings();

        expect(api.get).toBeCalledTimes(1);
        expect(api.get).toBeCalledWith(API_SETTINGS_URL);
        expect(subject).toEqual(raceSettingsResponse);
      });
    });

    describe('when request failed', () => {
      it('returns error message', async () => {
        api.get.mockRejectedValue();

        await fetchRaceSettings().catch(() => {});

        expect(api.get).toBeCalledTimes(1);
        expect(api.get).toBeCalledWith(API_SETTINGS_URL);
      });
    });
  });

  describe('.initializeRace', () => {
    describe('when request is successfully', () => {
      it('returns the server response', async () => {
        api.post.mockResolvedValue('ok');
        const subject = await initializeRace();

        expect(api.post).toBeCalledTimes(1);
        expect(api.post).toBeCalledWith(API_START_URL);
        expect(subject).toEqual('ok');
      });
    });

    describe('when request failed', () => {
      it('returns error message', async () => {
        api.post.mockRejectedValue();

        await initializeRace().catch(() => {});

        expect(api.post).toBeCalledTimes(1);
        expect(api.post).toBeCalledWith(API_START_URL);
      });
    });
  });

  describe('.fetchRaceCheckpoints', () => {
    describe('when request is successfully', () => {
      it('returns the server response', async () => {
        api.get.mockResolvedValue(raceCheckpointsResponse);
        const subject = await fetchRaceCheckpoints();

        expect(api.get).toBeCalledTimes(1);
        expect(api.get).toBeCalledWith(API_CHECKPOINTS_URL);
        expect(subject).toEqual(raceCheckpointsResponse);
      });
    });

    describe('when request failed', () => {
      it('returns error message', async () => {
        api.get.mockRejectedValue();

        await fetchRaceCheckpoints().catch(() => {});

        expect(api.get).toBeCalledTimes(1);
        expect(api.get).toBeCalledWith(API_CHECKPOINTS_URL);
      });
    });
  });

  describe('.stopRace', () => {
    describe('when request is successfully', () => {
      it('returns the server response', async () => {
        api.post.mockResolvedValue('ok');
        const subject = await stopRace();

        expect(api.post).toBeCalledTimes(1);
        expect(api.post).toBeCalledWith(API_STOP_URL);
        expect(subject).toEqual('ok');
      });
    });

    describe('when request failed', () => {
      it('returns error message', async () => {
        api.post.mockRejectedValue();

        await stopRace().catch(() => {});

        expect(api.post).toBeCalledTimes(1);
        expect(api.post).toBeCalledWith(API_STOP_URL);
      });
    });
  });
});
