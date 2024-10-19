import React, { useState } from 'react';
import Image from 'next/image';
import htmlimg from '../images/html.png';

const Modal = ({ isOpen, onClose, onUpdate, currentStats }) => {
  const [rank, setRank] = useState(currentStats.rank);
  const [percentile, setPercentile] = useState(currentStats.percentile);
  const [score, setScore] = useState(currentStats.score);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRank = parseInt(rank, 10);
    const updatedPercentile = parseInt(percentile, 10);
    const updatedScore = parseInt(score, 10);

    onUpdate({ rank: updatedRank, percentile: updatedPercentile, score: updatedScore });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Update scores</h2>
          <Image src={htmlimg} alt="HTML5 Logo" className="w-8 h-8" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 p-2">1</div>
            <div className="flex-grow flex justify-between items-center">
              <label className="text-gray-700">
                Update your <label className='font-bold'>Rank</label>
              </label>
              <input
                type="text"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                className="h-10 w-1/3 rounded-md border border-gray-300 shadow-sm focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50" // Increased height
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 p-2">2</div>
            <div className="flex-grow flex justify-between items-center">
              <label className="text-gray-700">
                Update your <label className='font-bold'>Percentile</label>
              </label>
              <input
                type="text"
                value={percentile}
                onChange={(e) => setPercentile(e.target.value)}
                className="h-10 w-1/3 rounded-md border border-gray-300 shadow-sm focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50" // Increased height
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
            <div className="flex-grow flex justify-between items-center">
              <label className="text-gray-700">
                Update your <label className='font-bold'>Current Score (out of 15)</label>
              </label>
              <input
                type="text"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                className="h-10 w-1/3 rounded-md border border-gray-300 shadow-sm focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50" // Increased height
              />
            </div>
          </div>
          <div className="flex justify-end mt-6 space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              save →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
