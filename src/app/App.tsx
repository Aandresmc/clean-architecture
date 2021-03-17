import React, { useEffect, useState } from "react";

import { containerBuilder } from "./app.container";

import { Theme } from "app/shared";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppRouter } from "./shared";

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await containerBuilder();
      setLoading(false);
    })();
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {!isLoading && <AppRouter />}
    </ThemeProvider>
  );
};

export default App;
