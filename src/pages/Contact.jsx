import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';

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
            <ContactsRoundedIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
            <Typography variant="h4" component="h1" fontWeight="bold">
                Contact Us
            </Typography>
        </Box>
    );
};

export default Home;
