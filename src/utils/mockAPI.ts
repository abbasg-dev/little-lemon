// Function to generate a seeded random number between 0 and 1
const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = (s * a) % m) / m;
};

// Function to fetch available times for reservations based on the date
const fetchAPI = (date) => {
  const availableTimes = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) availableTimes.push(i + ":00");
    if (random() < 0.5) availableTimes.push(i + ":30");
  }

  return availableTimes;
};

// Function to submit reservation form data
const submitAPI = (formData) => {
  return true;
};

export { fetchAPI, submitAPI };
