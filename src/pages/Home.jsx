import React from 'react';
import { Box, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const Home = () => {
    return (
        <Box
            sx={{
                minHeight: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center'
            }}
        >
            <HomeRoundedIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
            <Typography variant="h4" component="h1" fontWeight="bold">
                Welcome to Store
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, color: 'text.secondary' }}>
                Discover amazing products at amazing prices.
            </Typography>
        </Box>
    );
};

export default Home;
