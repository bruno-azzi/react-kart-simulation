const MillisecondsToHours = (milliseconds) => {
  if (milliseconds && typeof milliseconds === 'number') {
    return milliseconds / (1000 * 60 * 60);
  }

  return 0;
};

export default MillisecondsToHours;
