import GetRacerCheckpointLogsSorted from '../../utils/GetRacerCheckpointLogsSorted';
import GetDistanceBetweenTwoCheckpoints from '../../utils/GetDistanceBetweenTwoCheckpoints';

const GetRacerTravelledDistance = ({ racer, trackLength }) => {
  const logs = GetRacerCheckpointLogsSorted(racer);

  const distancesArray = [];
  let travelledDistance = 0;

  logs.forEach((log, index) => {
    const first = log.position;
    const next = logs[index + 1]?.position;

    if (next >= 0) {
      distancesArray.push(
        GetDistanceBetweenTwoCheckpoints({
          pointA: first,
          pointB: next,
          trackLength,
        }),
      );
    }
  });

  if (distancesArray.length) {
    travelledDistance = distancesArray.reduce((a, b) => a + b);
  }

  return travelledDistance;
};

export default GetRacerTravelledDistance;
