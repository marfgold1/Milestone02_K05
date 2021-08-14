import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './theme';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import { LokasiVaksin } from './pages/LokasiVaksin/LokasiVaksin';
import { TentangVaksin } from './pages/TentangVaksin/TentangVaksin';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar />
        <Homepage />
        <TentangVaksin />
        <LokasiVaksin />
        <Footer />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
