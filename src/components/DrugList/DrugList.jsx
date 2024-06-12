import React from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Pagination,
} from "@mui/material";
import { blue } from "@mui/material/colors";

const DrugList = ({
  loading,
  drugs,
  filteredDrugs,
  currentPage,
  itemsPerPage,
  handlePageChange,
  handleInfo,
}) => {
  const displayedDrugs = drugs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box mt={2}>
      {!loading && (
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
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
      {loading ? (
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress color="success" />
        </Box>
      ) : displayedDrugs.length > 0 ? (
        <Box display="flex" flexDirection="row" flexWrap="wrap" gap={5}>
          {displayedDrugs.map((drug, index) => (
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
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "45%",
                  lg: "30%",
                },
              }}
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">Nombre del Medicamento:</Typography>
                <Typography variant="body1">{drug.term}</Typography>
              </Box>
              <Button onClick={() => handleInfo(drug.term)}>+ INFO</Button>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="body1">Sin datos</Typography>
      )}
    </Box>
  );
};

export default DrugList;
