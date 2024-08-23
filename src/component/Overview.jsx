import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
  { name: 'Aug', value: 3200 },
  { name: 'Sep', value: 2900 },
  { name: 'Oct', value: 3500 },
  { name: 'Nov', value: 3000 },
  { name: 'Dec', value: 3200 },
];

const Overview = () => {
  return (
    <div className="flex-1 bg-white  rounded-lg p-6 shadow h-50 ">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Overview</h3>
        <button className="text-purple-500">↓ Download Report</button>
      </div>

      <div className="flex justify-start mb-4">
        <button className="bg-gray-200 rounded-lg px-4 py-2 mr-2">Monthly</button>
        <button className="bg-purple-500 text-white rounded-lg px-4 py-2">Yearly</button>
      </div>

      <div className="h-90  rounded-lg">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar  dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;