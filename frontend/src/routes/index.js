import config from "../config";
import Home from "../pages/Home/Home";
import Brand from "../pages/Brand/Brand";
import AllBrands from "../pages/AllBrands/AllBrands";
import Bodycare from "../pages/Bodycare/Bodycare";
import Lipstick from "../pages/Lipstick/Lipstick";
import Search from "../pages/Search/Search";
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";
import NotFounded from "../pages/NotFounded/NotFounded";

const publicRoutes = [
  { path: config.routes.home, component: <Home /> },
  { path: config.routes.men, component: <Men /> },
  { path: config.routes.women, component: <Women /> },
  { path: config.routes.brand, component: <Brand /> },
  { path: config.routes.brandsex, component: <Brand /> },
  { path: config.routes.allBrands, component: <AllBrands /> },
  { path: config.routes.bodycare, component: <Bodycare /> },
  { path: config.routes.lipstick, component: <Lipstick /> },
  { path: config.routes.search, component: <Search /> },
  { path: "/*", component: <NotFounded /> },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
