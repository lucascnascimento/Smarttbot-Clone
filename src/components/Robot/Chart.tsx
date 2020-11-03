/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Text,
} from 'recharts';
import theme from '../../styles/themes/smarttBotDefault';
import { Movimentations } from '../../types/types';

interface ChartData {
  data: Array<Movimentations>;
}

/**
 * Renders a chart from the displayed data.
 * @param data Data to be displayed by the chart.
 */
const Chart: React.FC<ChartData> = ({ data }: ChartData) => {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="value" stroke={theme.colors.green2} />
        <CartesianGrid strokeDasharray="3 3" />
        <Text scaleToFit />
        <XAxis dataKey="dateHour" tick={{ fontSize: 11 }} />
        <YAxis dataKey="value" tick={{ fontSize: 11 }} width={25} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
