import { CustomDate } from '../context/Task/TaskContext';

export const getStringFromCustomDate = (date: CustomDate) => {
  return `${date.day}/${date.month}/${date.year}`;
};

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