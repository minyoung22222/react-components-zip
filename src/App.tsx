import { Global, ThemeProvider } from '@emotion/react';
import reset from './styles/reset';

import theme from './styles/theme';
import Button from './components/Button';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <Button />
      </ThemeProvider>
    </>
  );
}

export default App;
