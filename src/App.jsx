import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import Section4 from './Pages/Home/Section4'
import Layout from './assets/components/Layout/Layout'
import Item_Detail from './assets/components/Item_Detail/Item_Detail'
import About from './Pages/About Us/About'
import FoodGallary from './Pages/Food Gallary/FoodGallary'
import Contact from './Pages/Contact/Contact'

function App() {

  return (
    <Router>

      <Routes>
        <Route path='/' element={<Layout />} >

          <Route path='' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Our Menu' element={<Section4 />} />
          <Route path='Food Gallary' element={<FoodGallary />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Item_Detail' element={<Item_Detail />} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App
