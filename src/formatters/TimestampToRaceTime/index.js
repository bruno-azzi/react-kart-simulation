const TimestampToRaceTime = (timestamp) => {
  const time = new Date(timestamp);

  if (!time.getTime()) {
    return 0;
  }

  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');
  const milliseconds = String(time.getMilliseconds()).padStart(3, '0');

  return `${minutes}:${seconds}:${milliseconds}`;
};

export default TimestampToRaceTime;
