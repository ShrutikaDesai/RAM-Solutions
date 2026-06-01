import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Fallback from "./components/Fallback";
import Home from "./components/Home";
import Layout from "./components/layouts/Layout";
import ProductCaseStudy from "./components/ProductCaseStudy";
import Products from "./components/Products";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => setShowLoader(true), 300);
    const finishLoading = () => setLoading(false);

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
    }

    return () => {
      clearTimeout(loaderTimer);
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  if (loading && showLoader) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-case-study" element={<ProductCaseStudy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/footer" element={<Footer />} />
        </Route>
        <Route path="*" element={<Fallback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
