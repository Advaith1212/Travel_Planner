import React from 'react';
import { Typography } from '@material-ui/core';

const CartView = ({ cartItems }) => {
  return (
    <div>
      <Typography variant="h6">My wishlist:</Typography>
      {cartItems.map((item, index) => (
        <div key={index}>
          <Typography>{item.name}</Typography>
          <Typography>Address: {item.address}</Typography>
        </div>
      ))}
    </div>
  );
};

export default CartView;