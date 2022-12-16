import { ThemeProvider } from "styled-components";
import Login from "./Pages/Auth/Login";

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
    <Login/>
    </ThemeProvider>
  );
}

export default App;
