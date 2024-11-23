import React, { useState } from 'react';
import { Pen } from 'lucide-react';

const MeetingDetails = () => {
  const [activeTab, setActiveTab] = useState('participants');

  const tabs = [
    { id: 'participants', label: 'Participants' },
    { id: 'timeSlot', label: 'Time Slot' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'dateRange', label: 'Date Range' },
  ];

  return (
    <div className="flex-1 bg-[#1e1e2f] text-white">
      <div className="max-w-4xl mx-auto p-8">
        <div className="relative mb-8">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800"
            alt="Meeting Room"
            className="w-32 h-32 rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 bg-[#f39c12] p-2 rounded-full">
            <Pen size={16} />
          </button>
        </div>

        <div className="mb-8">
          <div className="flex space-x-4 border-b border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-2 px-4 ${
                  activeTab === tab.id
                    ? 'text-[#f39c12] border-b-2 border-[#f39c12]'
                    : 'text-gray-400'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Meeting Description
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
                placeholder="Enter meeting description"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Meeting Title
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
                placeholder="Enter meeting title"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
              placeholder="+000 111 222 333"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Street Address
            </label>
            <input
              type="text"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
              placeholder="123 Main Street"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
                placeholder="56789"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                City
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
                placeholder="City Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                State
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
                placeholder="State Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Country
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
                placeholder="Country Name"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-[#f39c12] hover:text-white transition-colors"
          >
            Generate Slots
          </button>
        </form>
      </div>
    </div>
  );
};

export default MeetingDetails;