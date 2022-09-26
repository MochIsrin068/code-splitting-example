import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import loadable from "@loadable/component";

import HomePage from "./pages/Home";

const LoadablePage = loadable((props: any) => import(`./pages/${props.page}`), {
  fallback: <div>Page is Loading...</div>,
  cacheKey: (props) => props.page,
});

export default function App() {
  return (
    <div className="App">
      <h3>Loadable Components : </h3>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="dashboard"
              element={<LoadablePage page="Dashboard" />}
            />
            <Route
              path="notifications"
              element={<LoadablePage page="Notifications" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const AppLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};
