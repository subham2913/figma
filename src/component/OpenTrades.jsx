import React from 'react';

const OpenTrades = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow w-full sm:w-auto">
      <h4 className="text-lg font-semibold mb-4">Open Trades</h4>
      
      <div className="space-y-4">
        {[
          { pair: 'GBPUSD', change: '+56.00 USD', direction: 'Long', amount: '0.12' },
          { pair: 'USDJPY', change: '-0.09 USD', direction: 'Long', amount: '0.52' },
          { pair: 'EURUSD', change: '-1.09 USD', direction: 'Short', amount: '0.34' }
        ].map((trade) => (
          <div 
            key={trade.pair} 
            className={`bg-gray-100 rounded-md p-4 flex flex-col sm:flex-row  items-start sm:items-center ${trade.change.startsWith('+') ? 'shadow-green-500' : 'shadow-red-500'}`}
          >
            <div className="flex flex-col mb-3 sm:mb-0">
              <span className="text-gray-700">{trade.pair} {trade.direction}</span>
              <span className={trade.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>{trade.change}</span>
            </div>
            <div className="ml-auto text-gray-700">
              <span>{trade.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenTrades;
