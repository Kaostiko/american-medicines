import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { fetchDrugs } from "../controllers/drugController";

export const Home = () => {
  const [drug, setDrug] = useState([]);

  const handleSearch = async () => {
    const results = await fetchDrugs();
    setDrug(results);
    console.log("Esto es drug", results);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="stretch"
      m={5}
    >
      <h1 m={3}>Prueba técnica JARAXA pero en HOME</h1>
      <h3>Limpia y organización carpetas proyecto. Dependencias requeridas.</h3>
      <h3>Llamada API e interpretación respuesta.</h3>
      <Button variant="contained" onClick={handleSearch}>
        LLAMADA API
      </Button>
      <Box mt={2}>
        {drug?.length > 0 ? (
          drug.map((drug, index) => (
            <Box key={index} mb={2} p={2} border={1} borderRadius={4}>
              <Typography variant="h6">
                Company Number: {drug.companynumb}
              </Typography>
              <Typography variant="body1">
                Safety Report ID: {drug.safetyreportid}
              </Typography>
              <Typography variant="body1">
                Primary Source Country: {drug.primarysourcecountry}
              </Typography>
              <Typography variant="body1">
                Seriousness: {drug.serious}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">No data available</Typography>
        )}
      </Box>
    </Box>
  );
};
