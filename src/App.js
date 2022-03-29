import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Navigation from './components/navigation/Navigation'
import Layout from './components/layout/Layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
