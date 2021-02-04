const IsRaceEnded = ({ racers, laps }) => {
  const finishedRacers = racers.filter((racer) => {
    if (racer.currentLap === +laps) {
      return racer;
    }

    return null;
  });

  return finishedRacers.length === racers.length;
};

export default IsRaceEnded;
