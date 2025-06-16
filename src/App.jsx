import React from "react";
import { FodvegLoader, FodvegLoader1, NavBar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, Shop, Latest, About, Contact } from "./pages";
import { Footer } from "./sections";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <FodvegLoader1 onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {!isLoading && (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/latest" element={<Latest />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
