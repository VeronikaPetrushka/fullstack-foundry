export default function fillMissingDays(dateRange, waterIntakeRecords) {
  const { startDate, endDate } = dateRange;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dateMap = new Map();

  waterIntakeRecords.forEach(record => {
    const date = new Date(record.date).toISOString().split('T')[0];
    dateMap.set(date, record);
  });

  const result = [];
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    if (dateMap.has(dateStr)) {
      const record = dateMap.get(dateStr);
      result.push({ ...record, day: d.getDate() });
    } else {
      result.push({
        totalAmount: 0,
        percentageOfNorma: 0,
        date: d.toISOString(),
        day: d.getDate(),
      });
    }
  }

  return result;
}
