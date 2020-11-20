import React from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
import { useSelector } from 'react-redux';
import { selectEmotion } from '../../selectors/azureSelectors';

export const Graph = () => {
  
  const {
    anger,
    contempt,
    disgust,
    fear,
    happiness,
    neutral,
    sadness,
    surprise 
  } = useSelector(selectEmotion);

  const data = [
    { name: 'Anger', value: anger * 100 },
    { name: 'Contempt', value: contempt * 100 },
    { name: 'Disgust', value: disgust * 100 },
    { name: 'Fear', value: fear * 100 },
    { name: 'Happiness', value: happiness * 100 },
    { name: 'Neutral', value: neutral * 100 },
    { name: 'Sadness', value: sadness * 100 },
    { name: 'Surprise', value: surprise * 100 }
  ];

  const COLORS = ['#e63946ff',
    '#6f58c9ff',
    '#3c153bff',
    '#ff6700ff',
    '#1DB954',
    '#f1faeeff',
    '#457b9dff',
    '#e5f77dff'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y}
        fill="black"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };



  

    
  return (
    <PieChart width={400} height={250}>
      <Pie
        data={data}
        cx={200}
        cy={120}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {
          data.map((
            entry,
            index) => <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]} 
          />)
        }
      </Pie>
    </PieChart>
  );
};
