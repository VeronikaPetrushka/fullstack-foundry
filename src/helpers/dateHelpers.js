export const months_en = {
  '1':'January',
  '2':'February',
  '3':'March',
  '4':'April',
  '5':'May',
  '6':'June',
  '7':'July',
  '8':'August',
  '9':'September',
  '10':'October',
  '11':'November',
  '12':'December'
};

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
    month_name: months_en[currentDate.getMonth() + 1],
  };
  return today;
};
