import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { fetchDrugInfo } from "../controllers/drugController";
import { fetchOneDrug } from "../../controllers/drugController";
import {
  Box,
  Typography,
  CircularProgress,
  Button,
  Divider,
  Container,
} from "@mui/material";
import { purple } from "@mui/material/colors";

const DrugDetails = () => {
  const { drugName } = useParams();
  const [drugInfo, setDrugInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDrugInfo = async () => {
      const info = await fetchOneDrug(drugName);
      setDrugInfo(info);
      setLoading(false);
      console.log("ESTA ES LA INFO QUE LLEGA: ", info);
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
              {drugInfo.openfda.brand_name[0]}
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
                padding: 5,
                width: "45%",
                borderRadius: "25px",
              }}
            >
              <Typography variant="h6">Nombre genérico:</Typography>
              <Typography variant="h5">
                {drugInfo.openfda.generic_name[0]}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "rgb(21, 54, 92)",
                padding: 5,
                width: "45%",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <Typography variant="h6">Manufacturado por:</Typography>
              <Typography variant="h5">
                {drugInfo.openfda.manufacturer_name[0]}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "rgb(21, 54, 92)",
                padding: 5,
                width: "45%",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <Typography variant="h6">Tipo de producto:</Typography>
              <Typography variant="h5">
                {drugInfo.openfda.product_type[0]}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "rgb(126, 176, 195, 0.5)",
                padding: 5,
                width: "45%",
                borderRadius: "25px",
                color: "black",
              }}
            >
              <Typography variant="h6">Nombre de la sustancia:</Typography>
              <Typography variant="h5">
                {drugInfo.openfda.substance_name}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "rgb(126, 176, 195, 0.5)",
                padding: 5,
                width: "45%",
                borderRadius: "25px",
              }}
            >
              <Typography variant="h6"> Propósito: </Typography>
              <Typography variant="h5">{drugInfo.purpose}</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "rgb(21, 54, 92)",
                padding: 5,
                width: "45%",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <Typography variant="h6">No usar:</Typography>
              <Typography variant="h5">{drugInfo.do_not_use}</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "rgb(21, 54, 92)",
                padding: 5,
                width: "45%",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <Typography variant="h6">Pregunta al doctor si:</Typography>
              <Typography variant="h5">
                {drugInfo.ask_doctor_or_pharmacist}
              </Typography>
            </Box>
            <Box
              mb={10}
              sx={{
                backgroundColor: "rgb(126, 176, 195, 0.5)",
                padding: "50px",
                borderRadius: "25px",
                color: "black",
              }}
            >
              <Typography variant="h6">Indicaciones de uso:</Typography>
              <Typography variant="h5">
                {drugInfo.indications_and_usage[0]}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default DrugDetails;
