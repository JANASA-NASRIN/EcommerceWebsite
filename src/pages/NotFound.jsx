import React from 'react';

const NotFound = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="bg-white py-20 px-4">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-2 text-sm font-primary">
          <span className="text-gray-400 cursor-pointer hover:text-gray-600" onClick={handleGoHome}>Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-black">404 Error</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto text-center py-20">
        {/* 404 Heading */}
        <h1 className="text-[100px] md:text-[120px] font-secondery font-medium leading-none mb-8 tracking-wider">
          404 Not Found
        </h1>

        {/* Description */}
        <p className="text-base mb-12 text-gray-700 font-primary">
          Your visited page not found. You may go home page.
        </p>

        {/* Button */}
        <button 
          onClick={handleGoHome}
          className="bg-primary hover:bg-[#c93939] text-white font-primary font-medium text-base px-12 py-4 rounded transition-colors duration-300"
        >
          Back to home page
        </button>
      </div>
    </div>
  );
};

export default NotFound;