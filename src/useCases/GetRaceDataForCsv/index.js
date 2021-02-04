import TimestampToRaceTime from '../../formatters/TimestampToRaceTime';

const GetRaceDataForCsv = (racers) => {
  const data = racers.map((racer) => ({
    Automobile: racer.id,
    Name: racer.name,
    TotalLaps: racer.currentLap,
    TotalTime: TimestampToRaceTime(racer.totalTime),
    BestLap: racer.bestLapNumber,
    TimeBestLap: TimestampToRaceTime(racer.bestLapTime),
    Diff:
      racer.timeDiffFromLeader > 0
        ? TimestampToRaceTime(racer.timeDiffFromLeader)
        : '',
    Gap:
      racer.timeDiffFromAntecessorRacer > 0
        ? TimestampToRaceTime(racer.timeDiffFromAntecessorRacer)
        : '',
    StartingGrid: racer.startingPlace,
    AverageVelocity: racer.averageSpeed,
  }));

  return data;
};

export default GetRaceDataForCsv;
