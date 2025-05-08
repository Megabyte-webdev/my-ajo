import { lazy, Suspense } from "react";
import './App.css'
import { ToastContainer } from "react-toastify";
import { AuthProvider } from './context/AuthContext'
import { Routes, Route, Navigate } from "react-router-dom";
import Fallback from './components/Fallback'
const AuthPage=lazy(() => import("./pages/authentication/AuthPage"));
const Login=lazy(() => import("./pages/authentication/Login"));

function App() {

  return (
    <AuthProvider>
        <Suspense fallback={<Fallback />}>
        <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/register' element={<AuthPage />} />
        <Route path='/login' element={<Login />} />
        </Routes>
        </Suspense>
     <ToastContainer autoClose={2000} draggable />
    </AuthProvider>
  )
}

export default App
