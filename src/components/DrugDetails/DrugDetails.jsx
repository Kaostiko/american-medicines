import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { fetchDrugInfo } from "../controllers/drugController";
import { fetchOneDrug } from "../../controllers/drugController";
import {
  Box,
  Typography,
  CircularProgress,
  Divider,
  Container,
} from "@mui/material";

const DrugDetails = () => {
  const { drugName } = useParams();
  const [drugInfo, setDrugInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDrugInfo = async () => {
      const info = await fetchOneDrug(drugName);
      setDrugInfo(info);
      setLoading(false);
    };

    getDrugInfo();
  }, [drugName]);

  return (
    <Container
      sx={{
        backgroundColor: "white",
      }}
    >
      {loading ? (
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box m={5} textAlign="center">
          <Box display="flex" justifyContent="space-between" mb={5}>
            <Typography variant="h3" textAlign="center">
              {drugInfo.openfda.brand_name}
            </Typography>
          </Box>
          <Divider />
          <Box
            mt={5}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap={5}
          >
            <Box
              sx={{
                backgroundColor: "rgb(126, 176, 195, 0.5)",
                padding: 3,
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "45%",
                  lg: "45%",
                },
                borderRadius: "25px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Typography variant="p">Generic name:</Typography>
              <Typography variant="h5">
                {drugInfo.openfda.generic_name}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "rgb(21, 54, 92)",
                padding: 3,
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "45%",
                  lg: "45%",
                },
                borderRadius: "25px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 2,
                color: "white",
              }}
            >
              <Typography variant="p">Manufacturer by:</Typography>
              <Typography variant="h5">
                {drugInfo.openfda.manufacturer_name}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "rgb(21, 54, 92)",
                padding: 3,
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "45%",
                  lg: "45%",
                },
                borderRadius: "25px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 2,
                color: "white",
              }}
            >
              <Typography variant="p">Product type:</Typography>
              <Typography variant="h5">
                {drugInfo.openfda.product_type}
              </Typography>
            </Box>
            {drugInfo.openfda.substance_name && (
              <Box
                sx={{
                  backgroundColor: "rgb(126, 176, 195, 0.5)",
                  padding: 3,
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "45%",
                    lg: "45%",
                  },
                  borderRadius: "25px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Typography variant="p">Sustance name:</Typography>
                <Typography variant="h5">
                  {drugInfo.openfda.substance_name}
                </Typography>
              </Box>
            )}
            {drugInfo.do_not_use && (
              <Box
                sx={{
                  backgroundColor: "rgb(21, 54, 92)",
                  padding: 3,
                  width: "100%",
                  borderRadius: "25px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                  color: "white",
                }}
              >
                <Typography variant="p">Don't use:</Typography>
                <Typography variant="h5">{drugInfo.do_not_use}</Typography>
              </Box>
            )}
            {drugInfo.ask_doctor_or_pharmacist && (
              <Box
                sx={{
                  backgroundColor: "rgb(21, 54, 92)",
                  padding: 3,
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "45%",
                    lg: "45%",
                  },
                  borderRadius: "25px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                  color: "white",
                }}
              >
                <Typography variant="p">Ask doctor:</Typography>
                <Typography variant="h5">
                  {drugInfo.ask_doctor_or_pharmacist}
                </Typography>
              </Box>
            )}
            {drugInfo.warnings_and_cautions && (
              <Box
                sx={{
                  backgroundColor: "rgb(126, 176, 195, 0.5)",
                  padding: 3,
                  width: "100%",
                  height: "300px",
                  borderRadius: "25px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  overflowY: "scroll",
                }}
              >
                <Typography variant="p"> Warnings: </Typography>
                <Typography variant="h5">
                  {drugInfo.warnings_and_cautions}
                </Typography>
              </Box>
            )}
            {drugInfo.indications_and_usage && (
              <Box
                mb={10}
                sx={{
                  backgroundColor: "rgb(126, 176, 195, 0.5)",
                  padding: 3,
                  width: "100%",
                  height: "300px",
                  overflowY: "scroll",
                  borderRadius: "25px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="p">Indications and usage:</Typography>
                <Typography variant="h5">
                  {drugInfo.indications_and_usage}
                </Typography>
              </Box>
            )}
            {drugInfo.pregnancy && (
              <Box
                mb={10}
                sx={{
                  backgroundColor: "rgb(126, 176, 195, 0.5)",
                  padding: 3,
                  width: "100%",
                  height: "300px",
                  overflowY: "scroll",
                  borderRadius: "25px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="p">Pregnancy:</Typography>
                <Typography variant="h5">{drugInfo.pregnancy}</Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default DrugDetails;
