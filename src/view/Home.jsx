import {
  Box,
  Button,
  Typography,
  CircularProgress,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchDrugs } from "../controllers/drugController";

export const Home = () => {
  //Name data array
  const [drug, setDrug] = useState([]);
  //Show or not loader
  const [loading, setLoading] = useState(false);
  //Text searched
  const [searchText, setSearchText] = useState("");
  //Data array w/ the flitered result
  const [filteredDrugs, setFilteredDrugs] = useState([]);

  useEffect(() => {
    // Load all the data at the beginning
    const fetchData = async () => {
      //Show loader
      setLoading(true);
      const results = await fetchDrugs();
      setDrug(results);
      setFilteredDrugs(results);
      //Take off loader
      setLoading(false);
      // console.log(results);
    };

    fetchData();
  }, []);

  useEffect(() => {
    //Pay attention to Filter
    const filterResults = () => {
      if (searchText === "") {
        setFilteredDrugs(drug);
      } else {
        const filtered = drug.filter((d) =>
          d.term.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredDrugs(filtered);
      }
    };

    filterResults();
  }, [searchText, setDrug]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="stretch"
      m={5}
    >
      <h1 m={3}>Todos los medicamentos</h1>

      <TextField
        label="Buscar Medicamento"
        variant="outlined"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value), console.log(e.target.value);
        }}
        fullWidth
        margin="normal"
      />

      <Box mt={2}>
        {loading ? (
          <Box display="flex" justifyContent="center" mt={2}>
            <CircularProgress color="success" />
          </Box>
        ) : filteredDrugs?.length > 0 ? (
          filteredDrugs.map((filteredDrugs, index) => (
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
                <Typography variant="body1">{filteredDrugs?.term}</Typography>
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
