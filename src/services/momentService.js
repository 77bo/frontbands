import moment from 'moment';

/**
 * If no passed date to the function it will throw an Error.
 * If date is <24 hour ago, it will return e.g. - "2 hours ago".
 * If date is >2 days ago, it will return - "22 October".
 * If date is >1 year ago, it will return - "22 October 2017".
 *
 * @param {date} date you want get formatted.
 * @return {string} formatted date string based on how it relates to current date.
 */
export function formatDateRelatively(date) {
  let momentDate = moment(date);
  let hourDifference = moment().diff(momentDate, 'hours');
  let yearDifference = moment().diff(momentDate, 'year');

  // case 1, when date in edges of 1 day.
  if (hourDifference < 25 && hourDifference > -1) {
    return momentDate.startOf('minute').fromNow();
  }
  // case 2, when date is in this year
  if (yearDifference === 0) {
    return momentDate.format("D MMMM");
  }
  // case 3, when date is in previous year and anything else
  return momentDate.format("D MMMM YYYY");
}

export function fullDateFormat(date) {
  let momentDate = moment(date);
  return momentDate.format("D MMMM YYYY, h:m");
}