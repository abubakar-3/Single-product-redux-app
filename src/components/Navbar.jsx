import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
  Badge,
} from '@mui/material';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Product', path: '/product' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const cartItems = useSelector(state => state.todoSlice.todos);

  const uniqueItemCount = new Set(cartItems.map(item => item.id)).size;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'text.primary',
            fontWeight: 'bold',
            flexGrow: 1,
          }}
        >
            STORE LOGO 
        </Typography>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.label}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
              >
                {page.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>


        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page.label}
              component={Link}
              to={page.path}
              color="inherit"
              sx={{ color: 'text.primary', fontWeight: 500 }}
            >
              {page.label}
            </Button>
          ))}
        </Box>



        <IconButton
          aria-label="shopping cart"
          component={Link}
          to="/cart"
          color="Black"
          sx={{ ml: 2 }}
        >
          <Badge
            badgeContent={uniqueItemCount}
            color="secondary"
            invisible={uniqueItemCount === 0}
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
