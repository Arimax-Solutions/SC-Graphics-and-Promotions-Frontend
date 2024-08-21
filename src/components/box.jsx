import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { CiGift } from "react-icons/ci";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";

export default function BoxSx() {
  const h1Class = 'text-blue-500 text-lg text-blue-900';
  const pClass = 'text-gray-500';

  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#9E9E9E',
            dark: '#616161',
          },
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 'auto', // Set height to auto for responsiveness
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr', // 1 column on extra-small screens (mobile)
            sm: 'repeat(3, 1fr)', // 3 columns on small screens and above
          },
          gap: 2, // Gap between the grid items
          padding: 2, // Padding inside the Box
        }}
      >
        {/* First Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start', // Align items to the left
            height: '100%',
            color: 'white',
            padding: 1, // Padding inside each Box
          }}
        >
          <CiGift className="text-blue-900 mr-4" size={40} /> {/* Icon with margin-right */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column', // Stack text content vertically
            }}
          >
            <h1 className={h1Class}>FREE CONCEPT AND DESIGNING</h1>
            <p className={pClass}>We are always ready to give you the best gift idea</p>
          </Box>
        </Box>

        {/* Second Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start', // Align items to the left
            height: '100%',
            color: 'white',
            padding: 1, // Padding inside each Box
          }}
        >
          <MdOutlineAddLocationAlt className="text-blue-900 mr-4" size={40} /> {/* Icon with margin-right */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column', // Stack text content vertically
            }}
          >
            <h1 className={h1Class}>VISIT AND SEE PREVIOUS WORK</h1>
            <p className={pClass}>You can visit our showroom anytime</p>
          </Box>
        </Box>

        {/* Third Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start', // Align items to the left
            height: '100%',
            color: 'white',
            padding: 1, // Padding inside each Box
          }}
        >
          <Ri24HoursLine className="text-blue-900 mr-4" size={40} /> {/* Icon with margin-right */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column', // Stack text content vertically
            }}
          >
            <h1 className={h1Class}>ONLINE SUPPORT 24/7</h1>
            <p className={pClass}>We help you select the best corporate gift</p>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
