import {BrowserRouter} from 'react-router-dom'
import Nav from './components/nav/Nav';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </>
  )
}

export default App;
