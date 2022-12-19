import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Assests/Styles/globalStyles";
import Register from "./Pages/Auth/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import CardsDetails from "./Components/CardsDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Service from "./Pages/Service";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const theme = {
    colors: {
      btn: "#59C1BD",
      heading: "#F94892",
      text: "#42032C",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#CDF0EA",
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
          <Route path="/" element={<Cards />} />
          <Route path="/cart" element={<CardsDetails/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
