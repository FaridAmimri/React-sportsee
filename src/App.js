import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Home from './pages/Home'
import Profile from './pages/Profile'


function App() {
  const [mainData, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/user/18')
      .then((res) => res.json())
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Nav />
        {isLoading && <div>Loading...</div>}
        {!isLoading && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile data={mainData} />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  )
}

export default App
