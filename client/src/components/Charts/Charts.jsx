import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Charts = ({ title }) => {
  // Mock live metrics data
  const data = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 220 },
    { name: 'Mar', value: 180 },
    { name: 'Apr', value: 390 },
    { name: 'May', value: 310 },
    { name: 'Jun', value: 450 },
  ];

  return (
    <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#334155', fontWeight: '600' }}>{title}</h3>
      <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
          {title.includes("Velocity") ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={3} activeDot={{ r: 8 }} />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="value" fill="#4ade80" radius={[4, 4, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
