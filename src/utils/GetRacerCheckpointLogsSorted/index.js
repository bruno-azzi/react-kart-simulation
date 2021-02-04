const GetRacerCheckpointLogsSorted = (racer) => {
  let logs = [];

  if (!racer?.checkpoints) {
    return [];
  }

  racer.checkpoints.forEach((point) => {
    point.lapsPassed.forEach((item) => (item.position = point.position));
    logs = [...logs, ...point.lapsPassed];
  });

  logs.sort((a, b) => a.timestamp - b.timestamp);

  return logs;
};

export default GetRacerCheckpointLogsSorted;
