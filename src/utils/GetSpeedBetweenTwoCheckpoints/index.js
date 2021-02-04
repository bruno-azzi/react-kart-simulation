import MetersToKm from '../../formatters/MetersToKm';
import MillisecondsToHours from '../../formatters/MillisecondsToHours';

const GetSpeedBetweenTwoCheckpoints = ({
  pointA,
  pointB,
  trackLength,
  raceStartTime,
}) => {
  let distance = 0;
  let timeDifference = 0;

  if (pointB && pointA) {
    if (pointB.position) {
      distance = pointB.position - pointA.position;
    } else {
      distance = trackLength - pointA.position;
    }
  } else {
    distance = 0;
  }

  if (pointB && pointA) {
    timeDifference = pointB.timestamp - pointA.timestamp;
  } else if (pointB && !pointA) {
    timeDifference = pointB.timestamp - raceStartTime;
  } else {
    timeDifference = 0;
  }

  const distanceInKm = MetersToKm(distance);
  const timeInHours = MillisecondsToHours(timeDifference);

  let speed = 0;

  if (distanceInKm && timeInHours) {
    speed = distanceInKm / timeInHours;
  }

  return speed.toFixed(1);
};

export default GetSpeedBetweenTwoCheckpoints;
