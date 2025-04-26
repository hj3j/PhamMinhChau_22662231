import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
    <header>
      Header (Menu điều hướng)
    </header>
    <div class="banner">
      Banner (Chào mừng 50 năm giải phóng miền Nam)
    </div>
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
