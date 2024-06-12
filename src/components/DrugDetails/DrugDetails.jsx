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
    <Box m={5}>
      {loading ? (
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box m={5}>
          <Box display="flex" justifyContent="space-between" mb={5}>
            <Typography variant="h3">
              {drugInfo.openfda.brand_name[0]}
            </Typography>{" "}
            <Box
              component="img"
              src="./assets/doctor.png"
              alt="doctor"
              sx={{
                width: "50%",
                maxHeight: "100px",
                objectFit: "cover",
              }}
            />
            <Button href="/" variant="contained">
              Volver
            </Button>
          </Box>
          <Divider />
          <Box mt={5} bgcolor={purple[100]}>
            <Typography variant="h5">
              Nombre genérico: {drugInfo.openfda.generic_name[0]}
            </Typography>
            <Typography variant="h5">
              Manufacturado por: {drugInfo.openfda.manufacturer_name[0]}
            </Typography>
            <Typography variant="h5">
              Tipo de producto: {drugInfo.openfda.product_type[0]}
            </Typography>

            <Typography variant="body1">
              Nombre de la sustancia: {drugInfo.openfda.substance_name}
            </Typography>
            <Typography variant="body1">
              Descripción: {drugInfo.description}
            </Typography>
            <Typography variant="body1">
              Propósito: {drugInfo.purpose}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DrugDetails;
