import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import "../Navbar/navbar-styles.css";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        className="hamburger"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ m: 2 }}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        style={{ top: "50px" }}
        className="box-menu"
      >
        <div className="inside-box-list">
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>Serviços</MenuItem>
          <MenuItem onClick={handleClose}>Preços</MenuItem>
          <MenuItem onClick={handleClose}>Agendamentos</MenuItem>
          <MenuItem onClick={handleClose}>Entre em contacto</MenuItem>
        </div>
      </Menu>
    </div>
  );
}
