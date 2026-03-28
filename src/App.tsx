import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Tours from './pages/Tours'
import TourDetails from './pages/TourDetails'
import About from './pages/About'
import Destinations from './pages/Destinations'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import AdminDashboard from './pages/AdminDashboard'
import AdminLogin from './pages/AdminLogin'
import FloatingInquiry from './components/layout/FloatingInquiry'
import Blogs from './pages/Blogs'
import BlogDetails from './pages/BlogDetails'

// Simple component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden w-full">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/tours" element={<AdminDashboard />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />

          {/* Redirect singular incorrect URLs to plural valid ones */}
          <Route path="/destination" element={<Navigate to="/destinations" replace />} />
          <Route path="/tour" element={<Navigate to="/tours" replace />} />

          {/* Catch-all route to redirect unknown paths to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <FloatingInquiry />
      <Footer />
    </div>
  )
}

export default App
