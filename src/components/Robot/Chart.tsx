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

// import { Container } from './styles';

const data = [
  {
    date: '2020-10-27 01:48:44',
    value: 98,
  },
  {
    date: '2020-10-27 03:48:44',
    value: 159,
  },
  {
    date: '2020-10-27 05:48:44',
    value: 140,
  },
  {
    date: '2020-10-27 07:48:44',
    value: 175,
  },
  {
    date: '2020-10-27 09:48:44',
    value: 199,
  },
  {
    date: '2020-10-27 11:48:44',
    value: 63,
  },
  {
    date: '2020-10-27 13:48:44',
    value: 67,
  },
  {
    date: '2020-10-27 15:48:44',
    value: 122,
  },
  {
    date: '2020-10-27 17:48:44',
    value: 56,
  },
  {
    date: '2020-10-27 19:48:44',
    value: 48,
  },
  {
    date: '2020-10-27 21:48:44',
    value: 86,
  },
  {
    date: '2020-10-27 23:48:44',
    value: 113,
  },
  {
    date: '2020-10-28 01:48:44',
    value: 114,
  },
  {
    date: '2020-10-28 03:48:44',
    value: 158,
  },
  {
    date: '2020-10-28 05:48:44',
    value: 44,
  },
  {
    date: '2020-10-28 07:48:44',
    value: 107,
  },
  {
    date: '2020-10-28 09:48:44',
    value: 27,
  },
  {
    date: '2020-10-28 11:48:44',
    value: 94,
  },
  {
    date: '2020-10-28 13:48:44',
    value: 183,
  },
  {
    date: '2020-10-28 15:48:44',
    value: 80,
  },
  {
    date: '2020-10-28 17:48:44',
    value: 125,
  },
  {
    date: '2020-10-28 19:48:44',
    value: 38,
  },
  {
    date: '2020-10-28 21:48:44',
    value: 161,
  },
  {
    date: '2020-10-28 23:48:44',
    value: 43,
  },
  {
    date: '2020-10-29 01:48:44',
    value: 136,
  },
  {
    date: '2020-10-29 03:48:44',
    value: 2,
  },
  {
    date: '2020-10-29 05:48:44',
    value: 149,
  },
  {
    date: '2020-10-29 07:48:44',
    value: 68,
  },
  {
    date: '2020-10-29 09:48:44',
    value: 99,
  },
  {
    date: '2020-10-29 11:48:44',
    value: 82,
  },
];

const Chart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="value" stroke={theme.colors.green2} />
        <CartesianGrid strokeDasharray="3 3" />
        <Text scaleToFit />
        <XAxis dataKey="date" tick={{ fontSize: 11 }} />
        <YAxis tick={{ fontSize: 11 }} width={25} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
