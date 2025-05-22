import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { LayoutContainer, MainContent } from './Layout-style';



interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

