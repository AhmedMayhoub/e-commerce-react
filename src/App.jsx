import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import Cart from './pages/Cart'
import Product from './pages/Product'
import Login from './pages/Login'
import Placeholder from './pages/Placeholder'
import Order from './pages/Order'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import SearchNav from "./components/SearchNav"
function App() {


  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <SearchNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeholder" element={<Placeholder/>} />
        <Route path="/order" element={<Order/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
