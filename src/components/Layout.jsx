import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
