import React, { useState } from "react";
import { Box, Grid, Typography, IconButton, Button } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import vid1 from "../../assets/vid1.mp4";
import vid2 from "../../assets/vid2.mp4";
import vid3 from "../../assets/vid3.mp4";
import vid4 from "../../assets/vid4.mp4";
import vid5 from "../../assets/vid5.mp4";
import vid6 from "../../assets/vid6.mp4";
import prod1 from "../../assets/prod1.png";
import prod2 from "../../assets/prod2.png";
import prod3 from "../../assets/prod3.png";
import prod4 from "../../assets/prod4.png";

// Define Type for Videos
interface VideoItem {
  id: number;
  image: string;
  video: string;
}

// Video Data
const passengerVideos: VideoItem[] = [
  { id: 1, image: prod1, video: vid1 },
  { id: 2, image: prod2, video: vid2 },
  { id: 3, image: prod3, video: vid3 },
  { id: 4, image: prod4, video: vid4 },
];

const commercialVideos: VideoItem[] = [
  { id: 5, image: prod1, video: vid5 },
  { id: 6, image: prod2, video: vid6 },
  { id: 7, image: prod3, video: vid1 },
  { id: 8, image: prod4, video: vid2 },
];

const Product: React.FC = () => {
  const [category, setCategory] = useState<"passenger" | "commercial">("passenger");
  const [videos, setVideos] = useState<VideoItem[]>(passengerVideos);
  const [selectedVideo, setSelectedVideo] = useState<string>(passengerVideos[0]?.video || "");

  const handleCategoryChange = (newCategory: "passenger" | "commercial") => {
    const newVideos = newCategory === "passenger" ? passengerVideos : commercialVideos;
    setVideos(newVideos);
    setSelectedVideo(newVideos[0]?.video || "");
    setCategory(newCategory);
  };

  return (
    <Box sx={{ backgroundColor: "black", color: "white", p: { xs: 3, sm: 5 }, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="normal" sx={{ mb: 3, fontFamily: '"Poppins", sans-serif', px: { xs: 2, sm: 5 }, fontSize: { xs: "24px", sm: "32px", md: "40px" }, }} >
        Evolving the drive with{" "}
        <span style={{ color: "#fff", fontWeight: "bold" }}>360-degree</span> comprehensive solutions
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
        <Button onClick={() => handleCategoryChange("passenger")} sx={{ color: category === "passenger" ? "white" : "gray", fontSize: { xs: "16px", sm: "18px" }, fontWeight: category === "passenger" ? "bold" : "normal", }} >
          Passenger Vehicles
        </Button>
        <Button onClick={() => handleCategoryChange("commercial")} sx={{ color: category === "commercial" ? "white" : "gray", fontSize: { xs: "16px", sm: "18px" }, fontWeight: category === "commercial" ? "bold" : "normal", }} >
          Commercial Vehicles
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", maxWidth: "800px", mx: "auto", borderRadius: 2, overflow: "hidden" }} >
        <video key={selectedVideo} autoPlay muted playsInline width="100%">
          <source src={selectedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        {videos.map((product) => (
          <Grid item key={product.id} xs={6} sm={3}>
            <Box sx={{ position: "relative", cursor: "pointer", "&:hover img": { opacity: 0.7 }, }} onClick={() => setSelectedVideo(product.video)} >
              <img src={product.image} alt={`Product ${product.id}`} width="100%" style={{ height: "100px", width: "100px", objectFit: "cover", borderRadius: "10px", }} />
              <IconButton sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", backgroundColor: "rgba(0, 0, 0, 0.6)", "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" } }}>
                <PlayCircleOutlineIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Product;