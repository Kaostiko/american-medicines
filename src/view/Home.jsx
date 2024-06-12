import {
  Box,
  Button,
  Typography,
  CircularProgress,
  TextField,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchDrugs, fetchOneDrug } from "../controllers/drugController";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";
import Intro from "../components/Intro/Intro";

export const Home = () => {
  //Name data array
  const [drug, setDrug] = useState([]);
  //Show or not loader
  const [loading, setLoading] = useState(false);
  //Text searched
  const [searchText, setSearchText] = useState("");
  //Data array w/ the flitered result
  const [filteredDrugs, setFilteredDrugs] = useState([]);
  //Paginatio
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  const navigate = useNavigate();

  useEffect(() => {
    // Load all the data at the beginning
    const fetchData = async () => {
      //Show loader
      setLoading(true);
      //Controller call
      const results = await fetchDrugs();
      setDrug(results);
      setFilteredDrugs(results);
      //Take off loader
      setLoading(false);
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
        // Set the pagination and the data filtered
        setCurrentPage(1);
        setFilteredDrugs(filtered);
      }
    };

    filterResults();
  }, [searchText, drug]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const displayedDrugs = filteredDrugs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  //Show a new page w/ the info of a drug.
  const handleInfo = (drugName) => {
    fetchOneDrug(drugName);
    navigate(`/drug/${drugName}`);
  };

  return (
    <>
      <Intro />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="stretch"
        mt={2}
        bgcolor="red"
      >
        <Typography
          textAlign="center"
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "4rem",
              lg: "5rem",
            },
          }}
        >
          Buscador de medicamentos
        </Typography>

        <TextField
          label="Buscar Medicamento"
          variant="outlined"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          fullWidth
          margin="normal"
        />
        {!loading && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={2}
          >
            <Typography textAlign="center" mr={3}>
              Página: {currentPage}
            </Typography>
            <Pagination
              count={Math.ceil(filteredDrugs.length / itemsPerPage)}
              variant="outlined"
              shape="rounded"
              page={currentPage}
              onChange={handlePageChange}
            />
          </Box>
        )}

        <Box mt={2}>
          {loading ? (
            <Box display="flex" justifyContent="center" mt={2}>
              <CircularProgress color="success" />
            </Box>
          ) : displayedDrugs?.length > 0 ? (
            displayedDrugs.map((drug, index) => (
              <Box
                key={index}
                mb={2}
                p={2}
                border={1}
                borderRadius={4}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                bgcolor={blue[100]}
              >
                <Box display="flex" flexDirection="column">
                  <Typography variant="body2">
                    Nombre del Medicamento:
                  </Typography>

                  <Typography variant="body1">{drug?.term}</Typography>
                </Box>

                <Button onClick={() => handleInfo(drug.term)}>+ INFO</Button>
              </Box>
            ))
          ) : (
            <Typography variant="body1">Sin datos</Typography>
          )}
        </Box>
      </Box>
    </>
  );
};
