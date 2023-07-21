import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "src/Auth/AuthProvider";

type ProtectedRouteProps = {
  element: React.ReactElement;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.isAuthenticated) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // If the user is authenticated, render the element
  return element || <Outlet />;
};

export default ProtectedRoute;
