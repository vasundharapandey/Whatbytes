"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

const StatsContext = createContext();

export const useStats = () => useContext(StatsContext);

export const StatsProvider = ({ children }) => {
  const [stats, setStats] = useState({ rank: 4, percentile: 90, score: 12 });
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (typeof window !== 'undefined'  && window.localStorage) {
      const savedStats = localStorage.getItem('skillTestStats');
      if (savedStats) {
        setStats(JSON.parse(savedStats));
      }
      setLoading(false); 
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && isMounted && window.localStorage) {
      localStorage.setItem('skillTestStats', JSON.stringify(stats));
    }
  }, [stats, isMounted]);

  const updateStats = (newStats) => {
    setStats(newStats);
  };

  return (
    <StatsContext.Provider value={{ stats, updateStats, loading }}>
      {children}
    </StatsContext.Provider>
  );
};
