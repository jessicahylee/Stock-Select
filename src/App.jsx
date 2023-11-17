import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Form from './components/form'
import Profile from './pages/profile'
import './styles/global.scss'
import Login from './pages/login'
import Coins from './pages/coins'
import CoinDisplay from './pages/CoinsDisplay'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="/bitcoins" element={<Coins/>}/>
        <Route path="/bitcoins/:id" element={<CoinDisplay/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
