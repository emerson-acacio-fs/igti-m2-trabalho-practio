import { Home } from 'pages/Home';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
