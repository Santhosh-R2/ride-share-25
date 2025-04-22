import React from 'react';
import { TextField, InputAdornment, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function RiderSearch() {
  return (
    <Box sx={{ width: '270px' }}>
      <TextField
        fullWidth
        placeholder="Search..."
        // value={searchQuery}
        variant="outlined"
        sx={{
            backgroundColor: '#f5f5f5',
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
              height:'50px'
            },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton><SearchIcon color="action" /></IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default RiderSearch;