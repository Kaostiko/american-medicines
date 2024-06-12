import React from "react";
import { TextField, Box, Typography } from "@mui/material";

const Searcher = ({ searchText, setSearchText }) => {
  return (
    <Box>
      <Typography variant="h2" textAlign="center" p={5}>
        Buscador de medicamentos
      </Typography>
      <TextField
        label="Nombre del medicamento"
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
