
import React from 'react';

const ResponsiveScrollContainer = () => {
  // Sample data to demonstrate scrolling
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <div className="border rounded-lg shadow-sm">
        {/* Header */}
        <div className="p-4 border-b bg-gray-50">
          <h2 className="text-lg font-semibold">Responsive List</h2>
        </div>
        
        {/* Scrollable container that adapts to viewport */}
        <div className="relative">
          {/* The container will be scrollable when content overflows */}
          <div className="overflow-y-auto max-h-[50vh]">
            {/* Grid that reorganizes based on available space */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="text-gray-800">{item}</div>
                  <div className="text-gray-500 text-sm mt-2">
                    Additional content for {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export {ResponsiveScrollContainer};