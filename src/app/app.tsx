import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "src/Auth/AuthProvider";
import { useAppRoutes } from "src/Routes/useRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
import MobileViewDetector from "./MobileBoundary";

const App = (): JSX.Element => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <MobileViewDetector>
            <Routes />
          </MobileViewDetector>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
};

const Routes = () => {
  const element = useAppRoutes();
  return element;
};

export default App;
