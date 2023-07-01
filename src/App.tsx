import Header from "./components/Header"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/main-theme/defaultTheme"
import { DefaultContainer, GlobalStyle } from "./styles/main-theme/globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import PedidoConfirmado from "./pages/PedidoConfirmado";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <DefaultContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/pedido-confirmado" element={<PedidoConfirmado/>} />
          </Routes>
        </DefaultContainer>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
