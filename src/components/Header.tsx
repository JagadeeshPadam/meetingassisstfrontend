import React from 'react';
import { Calendar, Bell, Mail } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="h-16 bg-[#1e1e2f] flex items-center justify-between px-6 border-b border-gray-700">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-white">
          <Calendar size={20} />
        </button>
        <button className="text-gray-400 hover:text-white">
          <Bell size={20} />
        </button>
        <button className="text-gray-400 hover:text-white">
          <Mail size={20} />
        </button>
        <div className="flex items-center space-x-2">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-white">Meeting</span>
        </div>
      </div>
    </div>
  );
};

export default Header;