import React from 'react';

const InfoSection = () => {
  const stats = [
    { value: 99, description: 'Success in getting happy customer' },
    { value: 25, description: 'Thousands of successful business' },
    { value: 120, description: 'Total clients who love HighTech' },
    { value: 5, description: 'Stars reviews given by satisfied clients' },
  ];

  return (
    <div className="bg-yellow-400 p-6 grid grid-cols-4 gap-4 text-center">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="text-5xl font-bold">{stat.value}</div>
          <div className="mt-2 text-lg">{stat.description}</div>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;