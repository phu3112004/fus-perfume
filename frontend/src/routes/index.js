import config from "../config";
import Home from "../pages/Home/Home";
import Brand from "../pages/Brand/Brand";

const publicRoutes = [
  { path: config.routes.home, component: <Home /> },
  { path: config.routes.brand, component: <Brand /> },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
