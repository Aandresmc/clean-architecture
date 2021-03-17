
import React, { useEffect, useState } from "react";

import { containerBuilder } from "./app.container";


import theme from "app/shared/theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './shared/routes/routes';


const App = () => {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await containerBuilder();
      setLoading(false)
    })()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isLoading && <Router />}
    </ThemeProvider>
  );
}

export default App;
