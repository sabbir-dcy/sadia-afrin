import Home from './page/Home/Home'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <>
      <Toaster position="top-center" />
      <Navbar />
      <Home />
    </>
  )
}

export default App
