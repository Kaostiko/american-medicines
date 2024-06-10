import { Box, Button } from "@mui/material";
import React from "react";
import { fetchDrugs } from "../controllers/drugController";

export const Home = () => {
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
      <Button variant="contained" onClick={fetchDrugs}>
        LLAMADA API
      </Button>
    </Box>
  );
};
