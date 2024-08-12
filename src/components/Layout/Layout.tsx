import Sidebar from "./Sidebar/Sidebar";
import React, { ReactNode } from "react";
import './style.scss'
import SideBarRight from "./SidebarRight/SideBarRight";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="wrapper">{children}</div>
      <SideBarRight />
    </>
  );
};

export default Layout;
