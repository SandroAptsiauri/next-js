import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>Level 1 Header</header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
