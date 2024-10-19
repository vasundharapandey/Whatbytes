"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

const StatsContext = createContext();

export const useStats = () => useContext(StatsContext);

export const StatsProvider = ({ children }) => {
  const [stats, setStats] = useState(() => {
    const savedStats = localStorage.getItem('skillTestStats');
    return savedStats ? JSON.parse(savedStats) : { rank: 4, percentile: 90, score: 12 };
  });

  useEffect(() => {
    localStorage.setItem('skillTestStats', JSON.stringify(stats));
  }, [stats]);

  const updateStats = (newStats) => {
    setStats(newStats);
  };

  return (
    <StatsContext.Provider value={{ stats, updateStats }}>
      {children}
    </StatsContext.Provider>
  );
};
