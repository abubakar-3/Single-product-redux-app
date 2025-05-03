import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'text.primary', 
                py: 2,
                px: 2,
                mt: 5,
            }}
        >
            <Typography variant="h6" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}>
                Store App
            </Typography>

            <Stack direction="row" spacing={3} justifyContent="center" sx={{ flexWrap: 'wrap' }}>
                <Link href="/" underline="hover" color="inherit" sx={{ '&:hover': { color: 'secondary.main' } }}>
                    Home
                </Link>
                <Link href="/about" underline="hover" color="inherit" sx={{ '&:hover': { color: 'secondary.main' } }}>
                    About
                </Link>
                <Link href="/contact" underline="hover" color="inherit" sx={{ '&:hover': { color: 'secondary.main' } }}>
                    Contact
                </Link>
            </Stack>

            <Typography variant="body2" sx={{ textAlign: 'center', mt: 3 }}>
                © {new Date().getFullYear()} Product App. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
