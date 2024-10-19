import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import avatar from '../images/pfp.png';
import { Menu, X } from 'lucide-react';

const Sidebar = ({ activeItem, isOpen, setIsOpen }) => {
  const menuItems = [
    { name: 'Dashboard', icon: '📊', href: '/' },
    { name: 'Skill Test', icon: '📝', href: '/' },
    { name: 'Internship', icon: '💼', href: '/' },
  ];

  return (
    <div className={`bg-white text-gray-800 w-64 space-y-6 py-7 px-2 border-r border-gray-200 fixed h-full z-20 transition-all duration-300 ease-in-out ${isOpen ? 'left-0' : '-left-64'} md:left-0`}>
      <nav>
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <span className={`block py-2.5 px-4 rounded transition duration-200 relative ${
              activeItem === item.name ? 'bg-gray-200' : 'hover:bg-gray-100'
            }`}>
              {item.icon} {item.name}
              {activeItem === item.name && (
                <span className="absolute inset-0 rounded bg-gray-100 opacity-10" />
              )}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

const Topbar = ({ user, toggleSidebar }) => {
  return (
    <div className="bg-white shadow-md h-16 flex items-center justify-between px-4 border-b-2 border-gray-200 sticky top-0 z-10">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4 md:hidden">
          <Menu size={24} />
        </button>
        <h2 className="text-2xl font-semibold">WhatBytes</h2>
      </div>
      <div className="flex items-center space-x-4 border-gray-200 border-2 rounded-md p-1">
        <Image src={avatar} width={32} height={32} className="rounded-full" alt="User avatar" />
        <span className="font-medium">{user.name}</span>
      </div>
    </div>
  );
};

const DashboardLayout = ({ children, activeItem }) => {
  const [user] = useState({
    name: 'Rahil Siddique',
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      <Topbar user={user} toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeItem={activeItem} isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-white md:ml-64">
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;