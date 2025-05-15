import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import Fallback from "./components/Fallback";


const AuthPage = lazy(() => import("./pages/authentication/AuthPage"));
const Login = lazy(() => import("./pages/authentication/Login"));
const AgentRoutes = lazy(() => import("./routes/AgentRoutes"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));

function App() {
 
  return (
    <AuthProvider>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/agent/*" element={<AgentRoutes />} />
          
          {/* fallback */}
          <Route path='/*' element={<ComingSoon />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={2000} draggable />
    </AuthProvider>
  );
}

export default App;
