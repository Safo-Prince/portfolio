import React from "react";

const Layout = ({ children, Layout }) => {
  return (
    <div className={` w-full h-full z-0 bg-light p-32 ${children}`}>
      {children}
    </div>
  );
};

export default Layout;
