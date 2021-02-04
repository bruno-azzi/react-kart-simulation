import GetRacerCheckpointLogsSorted from '../../utils/GetRacerCheckpointLogsSorted';

const GetRacerTotalTime = ({ racer, raceStartTime }) => {
  const lastCheckpoint = GetRacerCheckpointLogsSorted(racer).slice(-1)[0];

  if (!lastCheckpoint) {
    return 0;
  }

  const totalTime = lastCheckpoint.timestamp - raceStartTime;

  return totalTime;
};

export default GetRacerTotalTime;
