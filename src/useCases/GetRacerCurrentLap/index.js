const GetRacerCurrentLap = (racer) => {
  const currentLap = racer.checkpoints[0].lapsPassed.length - 1;

  return currentLap >= 0 ? currentLap : 0;
};

export default GetRacerCurrentLap;
