import React from 'react';
import PropTypes from 'prop-types';

/**
 * Responsive Layout Wrapper
 * Provides a consistent container for all pages with proper spacing and structure
 */
const Layout = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header will be added via Navigation component */}
      <main className={`flex-1 ${className}`}>
        {children}
      </main>
      {/* Footer can be added here if needed */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout;