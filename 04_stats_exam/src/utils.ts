/**
 *
 * @param dateString '28/10/2018'
 * @return Date
 */
export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split("/").map((datePart) => parseInt(datePart));
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
