import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography, Divider, CardMedia } from '@mui/material';
import { increaseQuantity, decreaseQuantity, deleteCart } from '../config/redux/reducers/todoSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.todoSlice.todos);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <Box sx={{
      my: 4,
      minHeight: '50vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 3,
    }}>
      {cartItems.length === 0 ? (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}>
          <Typography variant="h5" fontWeight={'bold'} sx={{ mb: 2 }}>
            Your Cart is empty
          </Typography>

        </Box>
      ) : (
        cartItems.map(item => (
          <Box key={item.id} sx={{
            mb: 2,
            p: 2,
            border: '1px solid #ddd',
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: '#fafafa',
            width: '100%',
            maxWidth: 600,
          }}>
            <CardMedia
              component="img"
              height="180"
              image={item.image}
              alt={item.title}
              sx={{
                objectFit: 'contain',
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
              }}
            />
            <Typography variant="h6" sx={{ mt: 2 }} fontWeight="bold">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
              {item.description}
            </Typography>
            <Box display="flex" alignItems="center" gap={1} sx={{ my: 2 }}>

              <Button
                variant="outlined"
                size="small" 
                onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                sx={{
                  backgroundColor: '#fff',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                  },
                  padding: '2px 6px',
                }}
              >
                -
              </Button>
              <Typography variant="body1">{item.quantity}</Typography>

              <Button
                variant="outlined"
                size="small" 
                onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                sx={{
                  backgroundColor: '#fff',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                  },
                  padding: '2px 6px',
                }}
              >
                +
              </Button>
              <Typography variant="body1" sx={{ ml: 2 }}>
                ${(item.quantity * item.price).toFixed(2)}
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary" 
              fullWidth
              sx={{
                mt: 2,
                borderRadius: 2,
                padding: '8px 0',
                backgroundColor: '#1976d2', 
                '&:hover': {
                  backgroundColor: '#1565c0', 
                },
              }}
              onClick={() => dispatch(deleteCart({ id: item.id }))}
            >
              Delete
            </Button>
            <Divider sx={{ my: 2 }} />
          </Box>
        ))
      )}

      {cartItems.length > 0 && (
        <Box sx={{
          mt: 2,
          p: 2,
          borderTop: '1px solid #ddd',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 600,
          backgroundColor: '#f9f9f9',
          borderRadius: 2,
        }}>
          <Typography variant="h6" fontWeight="bold">Total Price:</Typography>
          <Typography variant="h6" color="primary">${totalPrice.toFixed(2)}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
