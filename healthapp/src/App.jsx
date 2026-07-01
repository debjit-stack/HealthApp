import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Home from './pages/home/Home.jsx'
import Platform from './pages/platform/Platform.jsx'
import Products from './pages/products/Products.jsx'
import Company from './pages/company/Company.jsx'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/products" element={<Products />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
