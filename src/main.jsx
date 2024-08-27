import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import customTheme from "../theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <ChakraProvider theme={customTheme}>
        {/* <ScrollProvider> */}
        <App />
        {/* </ScrollProvider> */}
      </ChakraProvider>
      {/* </AuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// подключение роутинга
