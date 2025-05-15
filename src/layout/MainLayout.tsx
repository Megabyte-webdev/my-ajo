
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop"; // Import ScrollToTop

const MainLayout = () => {
  return (
    <div className="bg-gray-50">
      <ScrollToTop /> {/* Ensures content starts at the top when navigating */}
      <Navbar />
      <main className="w-full max-w-peak mx-auto min-h-80">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
