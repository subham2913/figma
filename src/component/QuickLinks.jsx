import React from 'react';
import { GoArrowDownLeft, GoArrowUpRight, GoHistory } from "react-icons/go";
import { RiSettings4Line, RiUserFollowLine, RiExchange2Fill } from "react-icons/ri";
import { IoMdStarOutline } from "react-icons/io";
import { LuLineChart } from "react-icons/lu";
import { BiTransfer, BiBarChart } from "react-icons/bi";
import { LiaUserTieSolid } from "react-icons/lia";

const QuickLinks = () => {
  // Define a list of links and their corresponding icons
  const links = [
    { name: 'Deposit', icon: <GoArrowDownLeft /> },
    { name: 'Withdraw', icon: <GoArrowUpRight /> },
    { name: 'Settings', icon: <RiSettings4Line /> },
    { name: 'Verification', icon: <RiUserFollowLine /> },
    { name: 'Bonuses', icon: <IoMdStarOutline /> },
    { name: 'MT5', icon: <LuLineChart /> },
    { name: 'Transfer', icon: <BiTransfer /> },
    { name: 'History', icon: <GoHistory /> },
    { name: 'Partner', icon: <LiaUserTieSolid /> },
    { name: 'Exchange', icon: <RiExchange2Fill /> },
    { name: 'Analytics', icon: <BiBarChart /> },
  ];

  return (
    <div className="flex-1 bg-white rounded-lg p-4 shadow h-60">
      <h3 className="flex justify-start text-lg font-semibold mb-6">Quick Links</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {links.map(({ name, icon }) => (
          <div key={name} className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-2 shadow cursor-pointer hover:bg-gray-100 transition-all duration-300">
            <div className="flex flex-col items-center">
              <span className="text-xl mb-1 ">{icon}</span> {/* React icon */}
              <span className="text-xs text-gray-700">{name}</span>       {/* Link text */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
