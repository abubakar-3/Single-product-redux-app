import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box component="main" flexGrow={1}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
