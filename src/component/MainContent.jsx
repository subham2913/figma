import React from 'react';
import QuickLinks from './QuickLinks';
import TradingAccounts from './TradingAccounts';
import Overview from './Overview';
import OpenTrades from './OpenTrades';
import { GoBell } from "react-icons/go";

const MainContent = () => {
  return (

    
    <span className=" maincontainer ">
      <div className="flex justify-between  mb-8">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <div className="flex items-center">
          <input type="text" placeholder="Search..." className="border rounded-lg px-4 py-2 mr-4" />
          <button ><GoBell />
          </button>
        </div>
      </div>

    

      <div className="flex flex-col md:flex-row md:space-x-8">
  {/* Left side with QuickLinks and Overview */}
  <div className="flex flex-col space-y-8 flex-1 md:w-2/3">
    <QuickLinks />
    <Overview />
  </div>

  {/* Right side with TradingAccounts and OpenTrades */}
  <div className="flex flex-col space-y-8 w-full md:w-1/3 overflow-y-auto">
    <TradingAccounts />
    <OpenTrades />
  </div>
</div>


      
    </span>
  );
};

export default MainContent;