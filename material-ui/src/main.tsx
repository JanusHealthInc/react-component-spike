import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const queryClientOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient(queryClientOptions)}>
      <ThemeProvider
        theme={createTheme({
          palette: {
            primary: {
              main: "#556cd6",
            },
            secondary: {
              main: "#19857b",
            },
            error: {
              main: "#f87171",
            },
          },
          typography: {
            button: {
              textTransform: "none",
            },
          },
        })}
      >
        <ToastContainer
          position="bottom-left"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
