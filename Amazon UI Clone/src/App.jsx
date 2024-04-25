import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  NavBar,
  Checkout,
  ProductPage,
  SearchResult,
} from "./components/Index";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
