import React from 'react';

import AboutHeader from '../../../components/AboutHeader';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <AboutHeader />
      <div className="mt-3">{children}</div>
    </>
  );
};

export default MainLayout;
