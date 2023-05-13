import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
import './App.css'
import Home from './page/Home/Home'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'

function App() {
  useLenis(({ scroll }) => { })

  return (
    <ReactLenis root options={{
      duration: 2,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    }}>
      <Toaster position="top-center" />
      <Navbar />
      <Home />
    </ReactLenis>
  )
}

export default App
