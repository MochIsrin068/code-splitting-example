import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import HomePage from "./pages/Home";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Notifications = lazy(() => import("./pages/Notifications"));

export default function App() {
  return (
    <div className="App">
      <h3>React Router : </h3>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const DashboardPage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <Dashboard />
  </Suspense>
);

const NotificationsPage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <Notifications />
  </Suspense>
);

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
