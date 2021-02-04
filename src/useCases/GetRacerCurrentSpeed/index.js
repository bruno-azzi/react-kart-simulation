import GetRacerCheckpointLogsSorted from '../../utils/GetRacerCheckpointLogsSorted';
import GetSpeedBetweenTwoCheckpoints from '../../utils/GetSpeedBetweenTwoCheckpoints';

const GetRacerCurrentSpeed = ({ racer, raceStartTime, trackLength }) => {
  const logs = GetRacerCheckpointLogsSorted(racer);

  const lastTwoCheckpoints = logs.slice(-2);
  const penultime = lastTwoCheckpoints[0];
  const last = lastTwoCheckpoints[1];

  return GetSpeedBetweenTwoCheckpoints({
    pointA: penultime,
    pointB: last,
    raceStartTime,
    trackLength,
  });
};

export default GetRacerCurrentSpeed;
