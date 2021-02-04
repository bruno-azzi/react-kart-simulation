const GetDistanceBetweenTwoCheckpoints = ({ pointA, pointB, trackLength }) => {
  let distance = 0;

  if (pointB === 0) {
    distance = trackLength - pointA;
  } else {
    distance = pointB - pointA;
  }

  return distance;
};

export default GetDistanceBetweenTwoCheckpoints;
