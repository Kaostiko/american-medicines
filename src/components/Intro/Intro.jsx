import React from "react";
import { Box, Typography } from "@mui/material";

const Intro = () => {
  return (
    <>
      <Box sx={{ position: "relative", textAlign: "center", color: "white" }}>
        <Box
          component="img"
          src="./assets/bgmedico.jpg"
          alt="Background"
          sx={{
            width: "100%",
            maxHeight: "300px",
            objectFit: "cover",
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: {
              xs: "50%",
              sm: "50%",
              md: "40%",
              lg: "35%",
            },
            transform: "translate(-50%, -50%)",
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "4rem",
              lg: "5rem",
            },
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            borderRadius: "50px",
            color: "#f9b232",
          }}
        >
          Farmacológica Morán
        </Typography>
      </Box>
      <Typography
        variant="h5"
        textAlign="center"
        sx={{
          p: {
            xs: 5,
            sm: 5,
            md: 10,
            lg: 10,
          },
        }}
      >
        En Farmacológica Morán, estamos dedicados a mejorar la salud y el
        bienestar de las personas a través de medicamentos innovadores y de alta
        calidad. Nuestro compromiso es ofrecer soluciones farmacéuticas que
        marquen la diferencia en la vida de nuestros pacientes y clientes.
      </Typography>
      <Typography variant="h2" textAlign="center" p={5}>
        Nuestra Misión
      </Typography>
      <Box
        component="img"
        src="./assets/mision.jpg"
        alt="Background"
        sx={{
          width: "100%",
          maxHeight: "300px",
          objectFit: "cover",
        }}
      />
      <Typography
        variant="h5"
        textAlign="center"
        sx={{
          p: {
            xs: 5,
            sm: 5,
            md: 10,
            lg: 10,
          },
        }}
      >
        En Farmacológica Morán, nuestra misión es proporcionar acceso a
        tratamientos efectivos y seguros, respaldados por la ciencia y
        desarrollados con el más alto estándar de calidad y ponemos a su
        disposición una búsqueda de los medicamentos comercializados
      </Typography>
    </>
  );
};

export default Intro;
