import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Main from './components/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <Header/>
        <Banner/>
        <Main/>
    <footer>
      Footer (Thông tin liên hệ, bản quyền)
    </footer>
  </div>
      
    </>
  )
}

export default App
