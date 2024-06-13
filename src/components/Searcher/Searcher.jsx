import React from "react";
import { TextField, Box, Typography } from "@mui/material";

const Searcher = ({ searchText, setSearchText }) => {
  return (
    <Box>
      <Typography variant="h2" textAlign="center" p={5}>
        Medication search
      </Typography>
      <TextField
        label="Drug's name"
        variant="outlined"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        fullWidth
        margin="normal"
      />
    </Box>
  );
};

export default Searcher;
