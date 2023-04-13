import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Import QueryClient and QueryClientProvider
import { QueryClient, QueryClientProvider } from "react-query";

// Import UserContextProvider
import { UserContextProvider } from "./context/userContext";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={client}>
       
          <App />
      
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>
);
