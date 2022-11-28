import React from "react";
import "./App.css";
import { createUseStyles } from "react-jss";
import AppContainer from "./components/AppContainer";
import { Route, Routes } from "react-router-dom";

const useStyles = createUseStyles(() => ({
  root: {
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <AppContainer>
      <div className={classes.root}>
        <Routes>
          <Route path="/" element={null} />
        </Routes>
      </div>
    </AppContainer>
  );
}

export default App;
