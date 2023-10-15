import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Register, Login, DashboardLayout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/dasboard",
    element: <DashboardLayout />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
