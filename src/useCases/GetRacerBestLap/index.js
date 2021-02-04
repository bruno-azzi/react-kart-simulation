import GetRacerCheckpointLogsSorted from '../../utils/GetRacerCheckpointLogsSorted';

const GetRacerBestLap = (racer) => {
  const logs = GetRacerCheckpointLogsSorted(racer);
  const lapTimes = [];

  const checkpointZeroTimes = logs
    .map((log) => {
      if (log.position === 0) {
        return log.timestamp;
      }

      return null;
    })
    .filter((time) => time);

  checkpointZeroTimes.forEach((timestamp, index) => {
    let lapTime = 0;
    const first = timestamp;
    const next = checkpointZeroTimes[index + 1];

    if (next) {
      lapTime = next - first;
      lapTimes.push({ lapTime, lapNumber: index + 1 });
    }
  });

  const lapData = lapTimes.sort((lapA, lapB) => lapA.lapTime - lapB.lapTime);

  const bestLap = lapData[0];

  return bestLap;
};

export default GetRacerBestLap;
