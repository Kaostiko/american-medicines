import { Box, Button, Typography, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchDrugs } from "../controllers/drugController";

export const Home = () => {
  const [drug, setDrug] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load all the data at the beginning
    const fetchData = async () => {
      //Show loader
      setLoading(true);
      const results = await fetchDrugs();
      setDrug(results);
      //Take off loader
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="stretch"
      m={5}
    >
      <h1 m={3}>Todos los medicamentos</h1>

      <Box mt={2}>
        {loading ? (
          <Box display="flex" justifyContent="center" mt={2}>
            <CircularProgress color="success" />
          </Box>
        ) : drug?.length > 0 ? (
          drug.map((drug, index) => (
            <Box
              key={index}
              mb={2}
              p={2}
              border={1}
              borderRadius={4}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">Medicamento:</Typography>
                <Typography variant="body1">{drug?.term}</Typography>
              </Box>
              <Button>+ INFO</Button>
            </Box>
          ))
        ) : (
          <Typography variant="body1">Sin datos</Typography>
        )}
      </Box>
    </Box>
  );
};
