function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export const getDateObject = (date = null) => {
  const currentDate = date ? new Date(date) : new Date();
  const today = {
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
    dayInMonth: daysInMonth(
      currentDate.getMonth() + 1,
      currentDate.getFullYear()
    ),
  };
  return today;
};
