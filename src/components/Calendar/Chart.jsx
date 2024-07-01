import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { weekActivity } from '../../redux/water/operations';
import { selectWaterWeekly } from '../../redux/water/selectors';
import getSevenDayRange from '../../helpers/getSevenDaysRange';
import fillMissingDays from '../../helpers/fillMissingDays';

const Chart = ({ selectedDate }) => {
  const waterWeekly = useSelector(selectWaterWeekly);
  const dispatch = useDispatch();
  const [weekDate, setWeekDate] = useState(null);

  useEffect(() => {
    setWeekDate(getSevenDayRange(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    if (weekDate) {
      dispatch(weekActivity(weekDate));
    }
  }, [dispatch, weekDate]);

  const data = useMemo(() => {
    if (waterWeekly && weekDate) {
      return fillMissingDays(weekDate, waterWeekly);
    }
  }, [waterWeekly, weekDate]);

  return (
    data && (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9BE1A0" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#9BE1A0" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="day"
            padding={{ left: 10, right: 10 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tickFormatter={value => `${value / 1000} L`}
            padding={{ top: 10, bottom: 10 }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              color: '#323F47',
              fontWeight: 'bold',
            }}
            labelStyle={{ color: '#323F47' }}
            itemStyle={{ color: '#323F47' }}
            cursor={false}
            offset={15}
            formatter={value => `${value} ml`}
            labelFormatter={() => ``}
          />
          <Area
            name="Water"
            type="monotone"
            dataKey="totalAmount"
            stroke="#87D28D"
            fill="url(#colorUv)"
            fillOpacity={1}
            activeDot={{
              r: 8,
              fill: '#87D28D',
              stroke: '#ffffff',
              strokeWidth: 2,
            }}
            dot={{ r: 8, fill: '#ffffff', stroke: '#87D28D', strokeWidth: 2 }}
            strokeWidth={2.5}
          ></Area>
        </AreaChart>
      </ResponsiveContainer>
    )
  );
};

export default Chart;
