import React from "react";
import { Box, Typography } from "@mui/material";
import bgVideo from "../../assets/new_video.mp4";

const Home: React.FC = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", }}>
      <video autoPlay loop muted playsInline style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: -1, }}>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "#fff", width: { xs: "90%", sm: "80%", md: "60%" },}}>
        <Typography variant="body1" sx={{ fontSize: { xs: "18px", sm: "20px", md: "25px" }, fontFamily: '"Poppins", sans-serif', }}>
          Driven by performance
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: { xs: "24px", sm: "32px", md: "55px" }, fontFamily: '"Poppins", sans-serif', py: 2, }} >
          Soft Trims and{" "} <span style={{ color: "#00BFFF" }}>NVH Solutions</span>
        </Typography>

        <Typography variant="h5" sx={{ fontSize: { xs: "18px", sm: "20px", md: "25px" }, fontFamily: '"Poppins", sans-serif', }}>
          for seamless rides
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
