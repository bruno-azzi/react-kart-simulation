const GetTimeDiffFromTwoRacers = ({ racerA, racerB }) => {
  if (racerA?.totalTime && racerB?.totalTime) {
    return racerA.totalTime - racerB.totalTime;
  }

  return 0;
};

export default GetTimeDiffFromTwoRacers;
