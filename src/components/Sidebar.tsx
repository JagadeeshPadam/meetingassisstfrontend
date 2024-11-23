import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, Clock, Users, Settings, LogOut, AlertCircle } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#1e1e2f] text-white flex flex-col">
      {/* Profile Section */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="text-sm font-semibold">Participant</div>
            <div className="text-xs text-gray-400">Deadline: Today</div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <NavLink
          to="/updates"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg mb-2 ${
              isActive ? 'bg-[#f39c12] text-white' : 'text-gray-400 hover:bg-gray-800'
            }`
          }
        >
          <Clock size={20} />
          <span>Meeting Updates</span>
        </NavLink>

        <NavLink
          to="/urgent"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg mb-2 ${
              isActive ? 'bg-[#f39c12] text-white' : 'text-gray-400 hover:bg-gray-800'
            }`
          }
        >
          <AlertCircle size={20} />
          <span>Urgent Meetings</span>
        </NavLink>

        <NavLink
          to="/meeting"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg mb-2 ${
              isActive ? 'bg-[#f39c12] text-white' : 'text-gray-400 hover:bg-gray-800'
            }`
          }
        >
          <Users size={20} />
          <span>Meeting</span>
        </NavLink>

        <NavLink
          to="/time"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg mb-2 ${
              isActive ? 'bg-[#f39c12] text-white' : 'text-gray-400 hover:bg-gray-800'
            }`
          }
        >
          <Calendar size={20} />
          <span>Time Management</span>
        </NavLink>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center space-x-3 p-3 rounded-lg w-full text-gray-400 hover:bg-gray-800">
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <button className="flex items-center space-x-3 p-3 rounded-lg w-full text-gray-400 hover:bg-gray-800">
          <LogOut size={20} />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;