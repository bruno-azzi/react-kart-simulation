const SortRacersByLowestTotalTime = (racers) => {
  const sortedRacers = racers.sort(
    (racerA, racerB) => racerA.totalTime - racerB.totalTime,
  );

  return sortedRacers;
};

export default SortRacersByLowestTotalTime;
