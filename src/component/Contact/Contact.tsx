import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <Box sx={{ backgroundColor: "#0072CE", color: "#fff", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 4, }}>
      <Grid container spacing={4} sx={{ maxWidth: "1200px", width: "100%" }}>
        <Grid item xs={12} md={5}>
          <Typography variant="h3" fontWeight="bold" sx={{ fontFamily: '"Poppins", sans-serif' }}> Get in touch</Typography>
          <Box sx={{ borderBottom: "2px solid white", width: "50px", my: 2 }} />
          <Typography variant="h6" sx={{ mb: 3, fontFamily: '"Poppins", sans-serif' }}> For general enquiries </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ fontFamily: '"Poppins", sans-serif' }}> Address : </Typography>
          <Typography variant="body2" sx={{ fontFamily: '"Poppins", sans-serif' }}> 110, 16th Road, Chembur, Mumbai - 400071 </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 2, fontFamily: '"Poppins", sans-serif' }}> Phone :</Typography>
          <Typography variant="body2" sx={{ fontFamily: '"Poppins", sans-serif' }}> +91 22 25208822 </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 2, fontFamily: '"Poppins", sans-serif' }}> Email :</Typography>
          <Typography variant="body2" sx={{ fontFamily: '"Poppins", sans-serif' }}> info@supremegroup.co.in</Typography>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField variant="standard" label="Full name" fullWidth required InputProps={{ sx: { color: "white" } }} InputLabelProps={{ sx: { color: "white" } }}/>
            <TextField variant="standard" label="Email" type="email" fullWidth required InputProps={{ sx: { color: "white" } }} InputLabelProps={{ sx: { color: "white" } }}/>
            <TextField variant="standard" label="Company" fullWidth InputProps={{ sx: { color: "white" } }} InputLabelProps={{ sx: { color: "white" } }} />
            <TextField variant="standard" label="Message" multiline rows={3} fullWidth required InputProps={{ sx: { color: "white" } }} InputLabelProps={{ sx: { color: "white" } }}/>
            <Button type="submit" variant="outlined" sx={{ mt: 2, color: "white", borderColor: "white", borderRadius: "20px", "&:hover": { backgroundColor: "#005aa7", borderColor: "white" }, }}> Send </Button>
          </Box>
        </Grid>
      </Grid>

      <ToastContainer />
    </Box>
  );
};

export default Contact;
