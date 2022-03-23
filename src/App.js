// import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Home from './pages/Home'
import Profile from './pages/Profile'


function App() {
  // const [data, setData] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   fetch('http://localhost:3000/user/18')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res.data)
  //       setIsLoading(false)
  //     })
  // }, [])

  return (
    <>
      <BrowserRouter>
        <Navigation />
        {/* {isLoading && <div>Loading...</div>}
        {!isLoading && ( */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<Profile />} />
          </Routes>
        {/* )} */}
      </BrowserRouter>
    </>
  )
}

export default App

// user={data}
// data={data}