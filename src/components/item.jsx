import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: 5,
  boxShadow: `0px 4px 8px 0px rgba(207, 201, 0, 0.6)`, 
  width: '100%', 
}));

const Item = ({ img, price, text, productId }) => {
  if (!productId) {
    console.error("Product ID is missing for the Item component.");
    return null; 
  }

  return (
    <Link to={`/product/${productId}`}>
      <CustomCard>
        <CardActionArea>
          <CardMedia
            component="img"
            image={img}
            alt={text}
            sx={{
              width: '100%',
              height: 200,
              objectFit: 'cover',
            }}
          />
          <CardContent>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <Typography gutterBottom component="div" className="flex-1">
                <h1 className="text-lg sm:text-xl font-mono font-bold">{price}</h1>
                {text}
              </Typography>
              <div className="mt-2 sm:mt-0 bg-green-300 text-white rounded-full px-4 py-1 text-center border border-white">
                <h1 className="text-green-600 font-serif text-sm sm:text-base">Buy</h1>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </CustomCard>
    </Link>
  );
};

export default Item;
