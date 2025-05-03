import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../config/redux/reducers/todoSlice';

const ProductCard = ({ title, description, image, id, price, index }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addInCart = () => {
        dispatch(addToCart({ title, description, image, id, index, price }));
    };

    return (
        <Card
            sx={{
                maxWidth: 260, // Reduced card width
                bgcolor: 'background.paper', // Subtle background
                borderRadius: '6px', // Slightly more rounded corners
                boxShadow: 1, // Subtle shadow
                '&:hover': {
                    boxShadow: 3, // Slightly larger shadow on hover
                    transform: 'scale(1.03)', // Subtle scaling effect
                    transition: 'all 0.3s ease',
                },
            }}
        >
            <CardActionArea onClick={() => navigate(`/product/${id}`)}>
                <CardMedia
                    component="img"
                    height="140" // Reduced image height
                    image={image}
                    alt={title}
                    sx={{
                        objectFit: 'contain', // Ensures the image stays in proportion
                        backgroundColor: 'background.default',
                        borderTopLeftRadius: '6px', // Rounded corners for the image
                        borderTopRightRadius: '6px',
                    }}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: 'bold',
                            color: 'text.primary',
                            fontSize: '1rem', // Slightly smaller font size
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                        {description.length > 80 ? description.slice(0, 80) + '...' : description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button
                    size="small"
                    color="secondary"
                    onClick={() => navigate(`/product/${id}`)}
                    sx={{
                        textTransform: 'none',
                        fontSize: '0.75rem', // Smaller font size
                        '&:hover': {
                            bgcolor: 'secondary.light',
                        },
                    }}
                >
                    See more
                </Button>
                <Button
                    size="small"
                    color="primary"
                    onClick={addInCart}
                    sx={{
                        textTransform: 'none',
                        fontSize: '0.75rem', // Smaller font size
                        '&:hover': {
                            bgcolor: 'primary.light',
                        },
                    }}
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
