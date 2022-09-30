import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { Tasks } from "./pages/Tasks";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Tasks />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
