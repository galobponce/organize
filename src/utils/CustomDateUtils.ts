import { CustomDate } from '../context/Task/TaskContext';

export const getStringFromCustomDate = (date: CustomDate) => {
  return `${date.day}/${date.month}/${date.year}`;
};

// Returns a required HTML date format from custom date
export const getHTMLStringFromCustomDate = (date: CustomDate) => {
  let auxDay = date.day.toString();
  let auxMonth = date.month.toString();
  if (date.day.toString().length < 2) {
    auxDay = `0${date.day}`
  }
  if (date.month.toString().length < 2) {    
    auxMonth = `0${date.month}`
  }
  return `${date.year}-${auxMonth}-${auxDay}`;
};

export const getCustomDateFromString = (str: string, separator: string) => {
  const result = str.split(separator);
  if (!str[0] || !str[1] || !str[2]) return null;
  return {
    year: Number(result[0]),
    month: Number(result[1]),
    day: Number(result[2])
  };
};

export const isGreaterThanToday = (date: CustomDate): boolean => {
  if (!date.day) return false;  

  const todayDate = new Date;
  if (date.year < todayDate.getFullYear()) return true;
  if (date.month < todayDate.getMonth() + 1) return true;
  if (date.day < todayDate.getDate()) return true;
  return false;
};