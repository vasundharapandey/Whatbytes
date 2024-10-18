
import React, { useState } from 'react';
import Link from 'next/link';
import avatar from '../images/pfp.png';
import Image from 'next/image'

const Sidebar = ({ activeItem }) => {
  const menuItems = [
    { name: 'Dashboard', icon: '📊', href: '/' },
    { name: 'Skill Test', icon: '📝', href: '/' },
    { name: 'Internship', icon: '💼', href: '/' },
  ];

  return (
    <div className="bg-white text-gray-800 w-64 space-y-6 py-7 px-2 border-r border-gray-200">
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

const Topbar = ({ user }) => {
  return (
    <div className="bg-white shadow-md h-16 flex items-center justify-between px-4 border-b-2 border-gray-200">
      <h2 className="text-2xl font-semibold">WhatBytes</h2>
      <div className="flex items-center space-x-4 border-gray-200 border-2 rounded-md p-1">
        <Image src={avatar} className="w-8 h-8 rounded-full" alt="User avatar" />
        <span className="font-medium">{user.name}</span>
      </div>
    </div>
  );
};

const DashboardLayout = ({ children, activeItem }) => {
  const [user] = useState({
    name: 'Rahil Siddique',
    avatar: '/avatar-placeholder.png',
  });

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      <Topbar user={user} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeItem={activeItem} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;