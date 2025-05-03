import React from 'react';
import { Box, Typography } from '@mui/material';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

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
            <InfoRoundedIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
            <Typography variant="h4" component="h1" fontWeight="bold">
                About Us
            </Typography>
        </Box>
    );
};

export default Home;
