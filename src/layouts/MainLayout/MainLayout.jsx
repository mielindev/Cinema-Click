import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router";
import Slidebar from "../../components/Slidebar/Slidebar";
import { Box, CssBaseline, Toolbar } from "@mui/material";

export default function MainLayout({ chilren }) {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Slidebar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)` }}
      >
        {/* <Toolbar /> */}
        {chilren}
        <Outlet />
      </Box>
    </Box>
  );
}
