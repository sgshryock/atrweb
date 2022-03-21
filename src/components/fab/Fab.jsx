import React from "react";
import "./fab.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

export default function FloatingActionButtons() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }} className="box">
      <Fab
        color="primary"
        aria-label="Add"
        size="medium"
        className="classes.fab"
        variant="extended"
        style={{ position: "fixed" }}
        href="tel:3522075716"
      >
        Call
      </Fab>
    </Box>
  );
}
