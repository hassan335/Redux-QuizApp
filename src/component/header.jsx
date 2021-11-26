import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            className="text-center"
            style={{ margin: "0 auto" }}
            variant="h6"
            color="inherit"
            component="div"
          >
            Quiz App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
