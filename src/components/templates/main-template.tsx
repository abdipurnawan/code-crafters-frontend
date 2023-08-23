import React from 'react';
import FooterSection from '../organism/footer-section';
import NavbarSection from '../organism/navbar-section';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <NavbarSection />
      {children}
      <FooterSection />
    </>
  );
};

export default MainTemplate;
