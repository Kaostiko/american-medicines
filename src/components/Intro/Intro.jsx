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
        We are dedicated to improving the health and well-being of people
        through innovative and high-quality medications. Our commitment is to
        provide pharmaceutical solutions that make a difference in the lives of
        our patients and clients.
      </Typography>
      <Typography variant="h2" textAlign="center" p={5}>
        Our mission
      </Typography>
      <Box
        component="img"
        src="./assets/mision.jpg"
        alt="mision"
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
        At Farmacológica Morán, our mission is to provide access to effective
        and safe treatments, backed by science and developed with the highest
        standard of quality. We offer a search tool for marketed medications to
        provide detailed information about them.
      </Typography>
    </>
  );
};

export default Intro;
