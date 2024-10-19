"use client";
import React, { useState,useEffect } from 'react';
import Modal from './components/modal';
import PercentileChart from './components/percentile';
import DashboardLayout from './components/DashboardLayout';
import CircularProgressBar from './components/questionanalytics';
import htmlimg from './images/html.png';
import Image from 'next/image'
import { useStats } from './context/StatsContext';
const SkillTestDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [stats, setStats] = useState({
  //   rank: 4,
  //   percentile: 90,
  //   score: 12
  // });
  const { stats, updateStats } = useStats();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // const updateStats = (newStats) => {
  //   setStats(newStats);
  // };

  return (
    <DashboardLayout activeItem="Skill Test">
      <div className="p-6 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Skill Test</h1>

          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">

            <div className="space-y-6 w-full">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 ">
                    <Image src={htmlimg} className='w-12 h-12' />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Hyper Text Markup Language</h2>
                    <p className="text-gray-500">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                  </div>
                  <button onClick={openModal} className="ml-auto bg-blue-600 text-white px-4 py-2 rounded">Update</button>
                </div>
              </div>


              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Statistics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x divide-gray-300">
                  <div className="text-center flex flex-col items-center sm:items-stretch">
                    <span className="text-2xl sm:text-3xl font-bold">{stats.rank}</span>
                    <p className="text-sm text-gray-500 mt-1">YOUR RANK</p>
                  </div>
                  <div className="text-center flex flex-col items-center sm:items-stretch">
                    <span className="text-2xl sm:text-3xl font-bold">{stats.percentile}%</span>
                    <p className="text-sm text-gray-500 mt-1">PERCENTILE</p>
                  </div>
                  <div className="text-center flex flex-col items-center sm:items-stretch">
                    <span className="text-2xl sm:text-3xl font-bold">{stats.score} / 15</span>
                    <p className="text-sm text-gray-500 mt-1">CORRECT ANSWERS</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Comparison Graph</h3>
                <p className="mb-4 text-sm text-gray-600">
                  You scored {stats.percentile} percentile which is higher than the average percentile 72% of all the engineers who took this assessment
                </p>
                <div className="h-40 ">
                  <PercentileChart userPercentile={stats.percentile} />
                </div>
              </div>
            </div>


            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Syllabus Wise Analysis</h3>
                <div className="space-y-4">
                  {['HTML Tools, Forms, History', 'Tags & References in HTML', 'Tables & References in HTML', 'Tables & CSS Basics'].map((item, index) => {

                    const textColors = ['text-blue-600', 'text-orange-600', 'text-red-600', 'text-green-600'];
                    const bgColors = ['bg-blue-600', 'bg-orange-600', 'bg-red-600', 'bg-green-600'];
                    const progressValues = [80, 60, 24, 96];

                    return (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className={textColors[index]}>{item}</span>
                          <span className={textColors[index]}>{progressValues[index]}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className={`${bgColors[index]} h-2.5 rounded-full`}
                            style={{ width: `${progressValues[index]}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>




              <div className="bg-white rounded-lg shadow-md p-6">
                <div className='flex justify-between'><h3 className="text-lg font-semibold mb-4">Question Analysis</h3>
                  <p className="text-lg font-semibold text-blue-700">{stats.score}/15</p></div>
                <p className="text-gray-600">You scored {stats.score} questions correct out of 15. However it still needs some improvements</p>
                <div className="flex items-center justify-center space-x-6">
                  <CircularProgressBar percentage={(stats.score / 15) * 100} />

                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onUpdate={updateStats}
          currentStats={stats}
        />
      </div>
    </DashboardLayout >
  );
};

export default SkillTestDashboard;
