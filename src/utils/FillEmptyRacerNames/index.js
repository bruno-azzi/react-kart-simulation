const FillEmptyRacerNames = (racers) => {
  const updatedRacers = racers.map((racer, index) => {
    if (!racer.name) {
      racer.name = `Racer #${index + 1}`;
    }

    return racer;
  });

  return updatedRacers;
};

export default FillEmptyRacerNames;
