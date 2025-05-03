import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'
import { Box, CircularProgress, Alert, Grid } from '@mui/material'

const Products = () => {
    const [loading, error, data] = useFetch('https://dummyjson.com/products')

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <CircularProgress color="primary" />
            </Box>
        )
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <Alert severity="error">Something went wrong.</Alert>
            </Box>
        )
    }

    return (
        <Grid container spacing={3} justifyContent="center" sx={{ my: 4 }}>
            {data.products.map((item, index) => (
                <Grid key={item.id}>
                    <Card
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.thumbnail}
                        price={item.price}
                        index={index}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default Products
