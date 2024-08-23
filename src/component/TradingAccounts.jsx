import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const TradingAccounts = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow mt-2 trading-accounts">
      <h3 className="flex justify-start text-lg font-semibold mb-6">Trading Accounts</h3>
      <div className="space-y-4 mb-6">
        {[1, 2].map((account) => (
          <div key={account} className="flex justify-between items-center bg-gray-50 rounded-lg p-4 account-item">
            <div>
              <p className="font-semibold">Master Account</p>
              <p className="text-sm text-gray-600">cTrader #273728</p>
              
              <div className="flex items-center">
                <p className="text-2xl font-bold">0.00 USD</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-gray-500"><GoArrowUpRight /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingAccounts;
