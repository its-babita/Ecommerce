import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Assests/Styles/globalStyles";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import CardsDetails from "./Components/CardsDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Layouts/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Pages/Products";
import Home from "./Pages/Home";

function App() {
  const theme = {
    colors: {
      btn: "#59C1BD",
      heading: "#F94892",
      text: "#42032C",
      white: "#D1D1D1",
      black: "#212529",
      helper: "#8490ff",
      bg: " #6685EE",
      border: "#990000",
      hr: "#ffffff",
      gradient: "",
      shadow: "",
      shadowSupport: "",
      footer_bg: "",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart/:id" element={<CardsDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
