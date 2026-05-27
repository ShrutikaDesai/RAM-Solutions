import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Products from "./components/Products";
import ProductCaseStudy from "./components/ProductCaseStudy";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Layout from "./components/layouts/Layout";
import Fallback from "./components/Fallback";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── ALL PAGES INSIDE LAYOUT ── */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-case-study" element={<ProductCaseStudy />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>

        <Route path="*" element={<Fallback />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
