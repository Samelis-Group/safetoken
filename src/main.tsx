import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import theme from "./theme/theme.tsx";


const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No root element found");
}

createRoot(rootElement).render(
  <StrictMode>
    <MantineProvider withGlobalClasses withCssVariables theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
