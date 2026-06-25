import Header from './components/header/header.jsx'
import Home from './components/home/home.jsx'
import Footer from './components/footer/footer.jsx'
import './App.css'

const App = () =>  {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App;