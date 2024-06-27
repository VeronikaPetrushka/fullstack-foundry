export default function getSevenDayRange(dateObject) {
  const { year, month, day } = dateObject;

  const currentDate = new Date(year, month - 1, day + 1);

  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() - 6);

  const formatDate = date => date.toISOString().split('T')[0];

  return {
    startDate: formatDate(startDate),
    endDate: formatDate(currentDate),
  };
}
