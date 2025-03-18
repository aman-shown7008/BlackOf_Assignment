import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, Typography, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import { useMediaQuery } from "@mui/material";
import Icon from "../../assets/Icon.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const isMobile: boolean = useMediaQuery("(max-width:600px)");

  return (
    <AppBar position="fixed" color="transparent" elevation={0} sx={{ backgroundColor: "white", zIndex: 1100 }} className="section">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingX: 2, minHeight: "60px" }}>
        
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <img src={Icon} alt="Supreme Group" style={{ height: 40 }} />
        </Box>

        {!isMobile && (
          <Box display="flex" alignItems="center" gap={2}>
            <Button variant="contained" sx={{ backgroundColor: "#5CD6FF", color: "#000", borderRadius: "20px", paddingX: 3, textTransform: "none", "&:hover": { backgroundColor: "#3bb8e0" }, border: "1px solid #00BFFF", }}> Contact Us </Button>

            <IconButton onClick={() => window.open("https://www.linkedin.com/company/blacksof/", "_blank")}>
              <LinkedInIcon fontSize="large" sx={{ color: "#000" }} />
            </IconButton>

            <Box display="flex" alignItems="center" gap={0.5}>
              <LanguageIcon sx={{ color: "#000" }} />
              <Typography fontWeight="bold">ENG</Typography>
            </Box>
          </Box>
        )}

        {isMobile && (
          <>
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon sx={{ color: "#000" }} />
            </IconButton>
            <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
              <Box sx={{ width: 200, padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                
                <Button variant="contained" sx={{ backgroundColor: "#5CD6FF", color: "#000", borderRadius: "20px", textTransform: "none", "&:hover": { backgroundColor: "#3bb8e0" }, border: "1px solid #00BFFF",}}> Contact Us</Button>

                <IconButton onClick={() => window.open("https://www.linkedin.com/company/blacksof/", "_blank")}>
                  <LinkedInIcon fontSize="large" sx={{ color: "#000" }} />
                </IconButton>

                <Box display="flex" alignItems="center" gap={0.5}>
                  <LanguageIcon sx={{ color: "#000" }} />
                  <Typography fontWeight="bold">ENG</Typography>
                </Box>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
