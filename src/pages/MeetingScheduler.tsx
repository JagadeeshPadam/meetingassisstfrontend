import React, { useState } from 'react';
import { Clock, Calendar } from 'lucide-react';

const timeSlots = [
  { time: '8:00 AM', column: 'Morning' },
  { time: '10:00 AM', column: 'Morning' },
  { time: '12:00 PM', column: 'Afternoon' },
  { time: '2:00 PM', column: 'Afternoon' },
  { time: '4:00 PM', column: 'Evening' },
  { time: '6:00 PM', column: 'Evening' },
];

const meetings = [
  {
    id: 1,
    title: 'Meeting Risk',
    description: 'Early Scheduling',
    time: '8:00 AM',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500',
  },
  {
    id: 2,
    title: 'Meeting Time',
    description: 'Risk Reduction',
    time: '11:00 AM',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500',
  },
  {
    id: 3,
    title: 'Meeting Update',
    description: 'Availability',
    time: '2:00 PM',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500',
  },
];

const MeetingScheduler = () => {
  const [activeFilter, setActiveFilter] = useState('participants');

  const filters = [
    { id: 'participants', label: 'Participants' },
    { id: 'timeSlot', label: 'Time Slot' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'dateRange', label: 'Date Range' },
  ];

  return (
    <div className="flex-1 bg-[#1e1e2f] text-white p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best Meeting Slots</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 rounded-lg bg-gray-800 text-gray-400">Day</button>
            <button className="px-4 py-2 rounded-lg bg-[#f39c12] text-white">Week</button>
            <button className="px-4 py-2 rounded-lg bg-gray-800 text-gray-400">Month</button>
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`py-2 px-4 rounded-lg ${
                activeFilter === filter.id
                  ? 'bg-[#f39c12] text-white'
                  : 'bg-gray-800 text-gray-400'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {['Morning', 'Afternoon', 'Evening', 'Night', 'Meeting', 'Last-Minute', 'Deadline'].map(
          (column, index) => (
            <div
              key={column}
              className={`bg-gray-800 rounded-lg p-4 ${
                column === 'Night' ? 'bg-opacity-50' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">{column}</span>
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>

              <div className="space-y-4">
                {meetings
                  .filter((meeting) => {
                    const hour = parseInt(meeting.time);
                    if (column === 'Morning') return hour >= 8 && hour < 12;
                    if (column === 'Afternoon') return hour >= 12 && hour < 16;
                    if (column === 'Evening') return hour >= 16 && hour < 20;
                    return false;
                  })
                  .map((meeting) => (
                    <div
                      key={meeting.id}
                      className="bg-gray-700 rounded-lg p-4 hover:bg-[#f39c12] transition-colors"
                    >
                      <img
                        src={meeting.image}
                        alt={meeting.title}
                        className="w-full h-24 object-cover rounded-lg mb-2"
                      />
                      <h3 className="font-semibold mb-1">{meeting.title}</h3>
                      <p className="text-sm text-gray-400">{meeting.description}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-400">
                        <Clock size={14} className="mr-1" />
                        {meeting.time}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MeetingScheduler;