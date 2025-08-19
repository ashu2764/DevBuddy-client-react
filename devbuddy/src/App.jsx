import { Routes, Route, Navigate, Link } from 'react-router-dom'
import './App.css'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'

function Navbar() {
  return (
    <div className="nav">
      <div className="brand">DevBuddy</div>
      <div className="nav-links">
        <a href="#">Product</a>
        <a href="#">Solutions</a>
        <a href="#">Resources</a>
        <a href="#">Pricing</a>
      </div>
      <div className="nav-actions">
        <Link to="/signup" className="btn ghost">Get Started</Link>
        <Link to="/login" className="btn light">Log In</Link>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}

export default App
