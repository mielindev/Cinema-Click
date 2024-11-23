import React from "react";
import { Outlet } from "react-router";

export default function MainLayout({ children }) {
  return (
    <div>
      MainLayout
      {children}
      <Outlet />
    </div>
  );
}
