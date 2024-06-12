import React from "react";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Home } from "../view/Home";
import DrugDetails from "../components/DrugDetails/DrugDetails";

export const AppRoutes = () => {
  return (
    <Container
      maxWidth="xxl"
      sx={{ backgroundColor: "#f4f4f4", marginBottom: 5 }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drug/:drugName" element={<DrugDetails />} />
      </Routes>
    </Container>
  );
};
