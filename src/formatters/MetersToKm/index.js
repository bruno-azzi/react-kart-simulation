const MetersToKm = (meters) => {
  if (meters && typeof meters === 'number') {
    return meters / 1000;
  }

  return 0;
};

export default MetersToKm;
