import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <Header/>
        <Banner/>
    <main>
      Content (Thông báo, tuyển sinh, sự kiện, hợp tác quốc tế,...)
    </main>
    <footer>
      Footer (Thông tin liên hệ, bản quyền)
    </footer>
  </div>
      
    </>
  )
}

export default App
