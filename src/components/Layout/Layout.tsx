import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { StyledLayout } from './style';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
