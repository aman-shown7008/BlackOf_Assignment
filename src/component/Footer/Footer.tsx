import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import icon from "../../assets/Icon.png";

const Footer: React.FC = () => {
  return (
    <Box sx={{ background: "linear-gradient(to bottom, #ffffff, #e1ecf8)", color: "black", py: 5 }}>
      <Grid container justifyContent="space-between" className="section">
        {/* Logo */}
        <Grid item md={12} sx={{ py: 2 }}>
          <img src={icon} alt="Supreme Group" width="150" />
        </Grid>

        {/* Applications Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ fontFamily: '"Poppins", sans-serif' }}>APPLICATIONS</Typography>
          {["Apparel", "Automotive", "Filtration", "Customised Nonwoven"].map((item) => (
            <Typography key={item} variant="body2" sx={{ mt: 1, fontFamily: '"Poppins", sans-serif', "&:hover": { color: "#007BFF", cursor: "pointer" }}}> {item} </Typography>
          ))}
        </Grid>

        {/* Company Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ fontFamily: '"Poppins", sans-serif', mt: {xs: 2, md: 0} }}> COMPANY </Typography>
          {["Who We Are", "Global Competency", "Innovation", "ESG Impact"].map((item) => (
            <Typography key={item} variant="body2" sx={{ mt: 1, fontFamily: '"Poppins", sans-serif', "&:hover": { color: "#007BFF", cursor: "pointer" }}}> {item} </Typography>
          ))}
        </Grid>

        {/* More Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ fontFamily: '"Poppins", sans-serif', mt: {xs: 2, md: 0}}}> MORE</Typography>
          {["Contact Us", "Careers"].map((item) => (
            <Typography key={item} variant="body2" sx={{ mt: 1, fontFamily: '"Poppins", sans-serif', "&:hover": { color: "#007BFF", cursor: "pointer" }}}> {item} </Typography>
          ))}
        </Grid>

        {/* Follow Us Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ fontFamily: '"Poppins", sans-serif', mt: {xs: 2, md: 0}}}> FOLLOW US </Typography>
          <Link href="https://www.linkedin.com/company/blacksof/" target="_blank" underline="none" color="inherit" sx={{ "&:hover": { color: "#007BFF" } }}> LinkedIn</Link>
        </Grid>
      </Grid>

      {/* Footer Bottom Section */}
      <Box sx={{ display: { xs: "block", md: "flex" }, justifyContent: "space-between", mt: {xs: 3, md: 5} }} className="section">
        <Typography variant="body2" sx={{ fontFamily: '"Poppins", sans-serif', mb: { xs: 2, md: 0 } }}> ©2024. All Rights Reserved. </Typography>
        <Typography variant="body2" sx={{ fontFamily: '"Poppins", sans-serif' }}>
          Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
