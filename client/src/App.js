import React from "react";
import { Typography, AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const theme = createTheme();

const useStyles = makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px !important",
    display: "flex !important",
    flexDirection: "row !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    width: "600px !important",
    border: "2px solid black !important",

    [theme.breakpoints.down("sm")]: {
      width: "90% !important",
    },
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    // <ThemeProvider theme={theme}>
      <div className={classes.wrapper}>
        <AppBar position="static" color="inherit" className={classes.appBar}>
          <Typography variant="h2" align="center">
            Video Chat
          </Typography>
        </AppBar>
        {/* VieoPlayer */}
        <VideoPlayer />
        {/* Options -> Notifications */}
        <Options>
          <Notifications />
        </Options>
      </div>
    // </ThemeProvider>
  );
}

export default App;
