import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import "../Navbar/navbar-styles.css";
import Menu from "./Menu";
import { Button } from "@material-ui/core";
import { AiFillCalendar } from "react-icons/ai";

export default function MenuAppBar() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="bar">
        <Toolbar>
          <Menu />
          <a href="#" class="animated-button1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            AGENDAR
          </a>{" "}
          <img src="/barbershop-logo.png" className="logo-nav" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
