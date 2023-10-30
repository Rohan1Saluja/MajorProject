import { Heritage } from "./pages/heritage/heritage";
import { Home } from "./pages/home/home";

const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/heritage",
    element: <Heritage />,
  },
];
export default AppRoutes;
