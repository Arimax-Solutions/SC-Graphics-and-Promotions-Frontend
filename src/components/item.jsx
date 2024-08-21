import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';

// Create a styled component with custom shadow
const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: 5,
  boxShadow: `0px 4px 8px 0px rgba(207, 201, 0, 0.6)`, // Custom drop shadow color
  width: '100%', // Take full width of the container
}));

const Item = ({ img, price, text }) => {
  return (
    <CustomCard>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt="Item Image"
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
          {/* <Typography component="div" className="mt-2 text-sm sm:text-base">
            {text}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </CustomCard>
  );
};

export default Item;
