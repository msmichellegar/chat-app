export const formatDate = (date: string): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateObj = new Date(date);

  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  // pad start of string and slice to get two-digit times
  const hours = `0${dateObj.getHours()}`.slice(-2);
  const minutes = `0${dateObj.getMinutes()}`.slice(-2);
  const seconds = `0${dateObj.getSeconds()}`.slice(-2);

  return `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`;
};
