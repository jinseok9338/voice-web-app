import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import ProtectedRoute from "./protectedRoutes";

export const useAppRoutes = () => {
  return useRoutes(
    routes.map(({ path, component: Component, isProtected }) =>
      isProtected
        ? {
            path,
            element: <ProtectedRoute element={<Component />} />,
          }
        : { path, element: <Component /> }
    )
  );
};
