import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      oi
    </ThemeProvider>
  );
}

export default App;
