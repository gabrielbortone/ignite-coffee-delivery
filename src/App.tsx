import Header from "./components/Header"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/main-theme/defaultTheme"
import Banner from "./components/Banner";
import { DefaultContainer } from "./styles/main-theme/globalStyles";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultContainer>
        <Header />
        <Banner/>
      </DefaultContainer>
    </ThemeProvider>
  )
}

export default App;
