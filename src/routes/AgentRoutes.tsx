import { lazy, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AgentDashboard = lazy(() => import("../pages/agent/AgentDashboard"));
const MainLayout = lazy(() => import("../layout/MainLayout"));

export default function AgentRoutes() {
  const { authDetails } = useContext(AuthContext);

  if (authDetails?.user?.role !== "agent") return <Navigate to="/login" replace />;

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route
          path="/"
          element={<AgentDashboard />}
        />
      </Route>
    </Routes>
  );
}
