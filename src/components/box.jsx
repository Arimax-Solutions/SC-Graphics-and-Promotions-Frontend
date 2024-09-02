import React from 'react';
import { Box, Typography, ThemeProvider, createTheme } from '@mui/material';
import { CiGift } from "react-icons/ci";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";

export default function BoxSx() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#f5f5f5', // Light gray background
        contrastText: '#000', // Black text for contrast
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          padding: 4,
          borderRadius: 2,
          bgcolor: 'primary.main',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(3, 1fr)',
          },
          gap: 3,
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        }}
      >
        {/* First Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            padding: 2,
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
            height: '100%',
          }}
        >
          <CiGift className="text-blue-500 mb-2" size={40} />
          <Typography variant="h6" component="h1" sx={{ color: '#1E3A8A', fontWeight: 'bold', marginBottom: 1 }}>
            FREE CONCEPT AND DESIGNING
          </Typography>
          <Typography sx={{ color: '#6B7280' }}>
            We are always ready to give you the best gift idea
          </Typography>
        </Box>

        {/* Second Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            padding: 2,
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
            height: '100%',
          }}
        >
          <MdOutlineAddLocationAlt className="text-blue-500 mb-2" size={40} />
          <Typography variant="h6" component="h1" sx={{ color: '#1E3A8A', fontWeight: 'bold', marginBottom: 1 }}>
            VISIT AND SEE PREVIOUS WORK
          </Typography>
          <Typography sx={{ color: '#6B7280' }}>
            You can visit our showroom anytime
          </Typography>
        </Box>

        {/* Third Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            padding: 2,
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
            height: '100%',
          }}
        >
          <Ri24HoursLine className="text-blue-500 mb-2" size={40} />
          <Typography variant="h6" component="h1" sx={{ color: '#1E3A8A', fontWeight: 'bold', marginBottom: 1 }}>
            ONLINE SUPPORT 24/7
          </Typography>
          <Typography sx={{ color: '#6B7280' }}>
            We help you select the best corporate gift
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
