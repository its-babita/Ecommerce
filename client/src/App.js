import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Assests/Styles/globalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "./Router/Routes";
import { RouterProvider } from "react-router-dom";

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
      {/* <Router>
        <Header />
        <Routes>
        <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart/:id" element={<CardsDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router> */}
      <RouterProvider router={Router}>

      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
