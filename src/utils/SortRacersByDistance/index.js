const SortRacersByDistance = (racers) => {
  const sortedRacers = racers.sort(
    (racerA, racerB) => racerB.distance - racerA.distance,
  );

  return sortedRacers;
};

export default SortRacersByDistance;
