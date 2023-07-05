import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContext from "./context";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import "./index.css";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
  </AppContext>
);
