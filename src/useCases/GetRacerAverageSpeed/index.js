import GetRacerCheckpointLogsSorted from '../../utils/GetRacerCheckpointLogsSorted';
import GetSpeedBetweenTwoCheckpoints from '../../utils/GetSpeedBetweenTwoCheckpoints';

const GetRacerAverageSpeed = ({ racer, raceStartTime, trackLength }) => {
  const speedsArray = [];
  let averageSpeed = 0;

  const logs = GetRacerCheckpointLogsSorted(racer);

  logs.forEach((log, index) => {
    const firstLog = log;
    const nextLog = logs[index + 1];

    if (nextLog) {
      speedsArray.push(
        GetSpeedBetweenTwoCheckpoints({
          pointA: firstLog,
          pointB: nextLog,
          raceStartTime,
          trackLength,
        }),
      );
    }
  });

  if (speedsArray.length) {
    const sum = speedsArray.reduce((a, b) => parseFloat(a) + parseFloat(b));
    averageSpeed = sum / speedsArray.length;
  }

  return averageSpeed.toFixed(1);
};

export default GetRacerAverageSpeed;
