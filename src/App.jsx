import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Form from './components/form'

import './styles/global.scss'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
