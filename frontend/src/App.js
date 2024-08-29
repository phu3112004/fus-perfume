import { publicRoutes } from "./routes";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { Fragment } from "react";

function App() {
  return (
    <div className="app">
      <Routes>
        {publicRoutes.map((item, index) => {
          let Layout = DefaultLayout;

          if (item.layout) {
            Layout = item.layout;
          } else if (item.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={item.path}
              element={<Layout>{item.component}</Layout>}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
