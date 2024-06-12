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
import Intro from "../components/Intro/Intro";
import Searcher from "../components/Searcher/Searcher";
import DrugList from "../components/DrugList/DrugList";

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

  //Show a new page w/ the info of a drug.
  const handleInfo = (drugName) => {
    fetchOneDrug(drugName);
    window.open(`/drug/${drugName}`, "_blank");
  };

  return (
    <Box sx={{ marginBottom: 5 }}>
      <Intro />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="stretch"
        mt={5}
        pb={5}
      >
        <Searcher searchText={searchText} setSearchText={setSearchText} />
        <DrugList
          loading={loading}
          drugs={filteredDrugs}
          filteredDrugs={filteredDrugs}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          handleInfo={handleInfo}
        />
      </Box>
    </Box>
  );
};
