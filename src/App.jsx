import {Routes, Route} from "react-router-dom";
import {Header, Footer, FloatingWhatsApp} from "./ui";
import {Home, Products, Product, Gallery, About, Contact} from "./pages";
export default () => <><Header/><main><Routes>
  <Route path="/" element={<Home/>}/><Route path="/products" element={<Products/>}/><Route path="/products/:slug" element={<Product/>}/>
  <Route path="/gallery" element={<Gallery/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/>
</Routes></main><Footer/><FloatingWhatsApp/></>;
