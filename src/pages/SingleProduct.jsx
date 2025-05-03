import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {
    Container,
    Grid,
    Typography,
    Box,
    Button,
    CircularProgress,
    Alert,
    Rating,
    Divider
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../config/redux/reducers/todoSlice'; 

const SingleProduct = () => {
    const { id } = useParams();
    const [loading, error, data] = useFetch(`https://dummyjson.com/products/${id}`);
    const dispatch = useDispatch(); 

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <CircularProgress color="primary" />
            </Box>
        );
    }

    if (error || !data) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <Alert severity="error">Something went wrong. Please try again later.</Alert>
            </Box>
        );
    }



    const handleAddToCart = () => {
        dispatch(addToCart({
            id: data.id,
            title: data.title,
            price: data.price,
            image: data.thumbnail,
            description: data.description,
        }));
    };

    return (
        <Container maxWidth="md" sx={{ my: 5 }}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={5}>
                    <Box
                        component="img"
                        src={data.thumbnail}
                        alt={data.title}
                        sx={{
                            width: '100%',
                            maxHeight: 300,
                            objectFit: 'contain',
                            borderRadius: 2,
                            boxShadow: 2,
                        }}
                    />
                </Grid>

                <Grid item xs={12} md={7}>
                    <Typography variant="h5" gutterBottom>{data.title}</Typography>

                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="h6" color="green">${data.price}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                            ${(data.price / (100 - data.discountPercentage) * 100).toFixed(2)}
                        </Typography>
                        <Typography variant="body2" color="green">-{data.discountPercentage}%</Typography>
                    </Box>

                    <Box mt={1} display="flex" alignItems="center" gap={1}>
                        <Rating value={data.rating} precision={0.1} readOnly />
                        <Typography variant="body2" color="text.secondary">({data.rating} Rating)</Typography>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="body2" sx={{ mb: 2 }}>
                        {data.description}
                    </Typography>

                    <Typography variant="body2">Availability: {data.stock > 0 ? `In Stock (${data.stock})` : 'Out of Stock'}</Typography>
                    <Typography variant="body2">Minimum Order Quantity: {data.minimumOrderQuantity}</Typography>
                    <Typography variant="body2">Shipping: {data.shippingInformation}</Typography>
                    <Typography variant="body2">Warranty: {data.warrantyInformation || '1 Year'}</Typography>
                    <Typography variant="body2">Return Policy: {data.returnPolicy || '30 Days'}</Typography>

                    <Box mt={2}>
                        <img
                            src="https://assets.dummyjson.com/public/qr-code.png"
                            alt="QR Code"
                            width={60}
                            height={60}
                            style={{ borderRadius: 8 }}
                        />
                        <Typography variant="body2">Barcode: {data.sku || '000012345'}</Typography>
                    </Box>

                    <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        sx={{
                            mt: 2,
                            py: 1.5,
                            backgroundColor: 'primary',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                            },
                        }}
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SingleProduct;
