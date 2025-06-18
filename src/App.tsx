import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="bg-blue-500 text-white p-4 rounded shadow">
        Tailwind is working!
      </div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
