import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  bgColorClass?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className, bgColorClass }) => {
  return (
    <div className={`w-full ${bgColorClass}`}>
      <div className={`max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
