import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router";

export default function MainLayout({ chilren }) {
  return (
    <div>
      <Header />
      {chilren}
      <Outlet />
    </div>
  );
}
