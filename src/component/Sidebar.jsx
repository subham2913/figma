import React, { useState } from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { IoCubeOutline } from "react-icons/io5";
import { AiOutlinePieChart } from "react-icons/ai";
import { RiExchangeBoxLine, RiWalletLine, RiSettings4Line, RiLogoutBoxLine } from "react-icons/ri";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { GoHistory } from "react-icons/go";
import { FiBell } from "react-icons/fi";
import { CiHeadphones } from "react-icons/ci";
import { PiUserCircleDuotone, PiCopyright } from "react-icons/pi";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div className={`full-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <button 
        className="sidebar-toggle-btn"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? 'Close' : 'Open'}
      </button>

      {isSidebarOpen && (
        <>
          <div className='ditch-dollar'>
            <span className='ditch'>Ditch</span>
            <div className='copyright'>
              <span className='dollar'>Dollar</span> 
              <PiCopyright className="copyright-icon" />
            </div>
          </div>

          {/* Navigation bar */}
          <nav className='nav'>
            <div className='nav-item'>
              <MdOutlineDashboard />
              <span>Dashboard</span>
            </div>
            <div className='nav-item'>
              <HiOutlineUsers />
              <span>CRM</span>
            </div>
            <div className='nav-item'>
              <IoCubeOutline />
              <span>MAM</span>
            </div>
            <div className='nav-item'>
              <AiOutlinePieChart />
              <span>PAMM</span>
            </div>
            <div className='nav-item'>
              <RiExchangeBoxLine />
              <span>Trade</span>
            </div>
            <div className='nav-item'>
              <RiWalletLine />
              <span>Wallet</span>
            </div>
            <div className='nav-item'>
              <HiOutlineCurrencyDollar />
              <span>Accounts</span>
            </div>
            <div className='nav-item'>
              <GoHistory />
              <span>History</span>
            </div>
          </nav>

          {/* Bottom section */}
          <div className='bottom-section'>
            <div className='nav-item'>
              <FiBell />
              <span>Notification</span>
            </div>
            <div className='nav-item'>
              <RiSettings4Line />
              <span>Settings</span>
            </div>
            <div className='nav-item'>
              <CiHeadphones />
              <span>Help & Support</span>
            </div>
            <div className='nav-item'>
              <RiLogoutBoxLine />
              <span>Log Out</span>
            </div>

            <hr className='hr'/>

            {/* User info */}
            <div className="user-info">
              <PiUserCircleDuotone className="user-icon" />
              <div>
                <p className="shyam">Shyam Shakur</p>
                <p className="email">shyam01.shankur@m...</p>
              </div>
            </div>            
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
