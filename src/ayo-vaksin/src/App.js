import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './theme';
import { Homepage } from './pages/Homepage';
import { Navbar } from './components/Navbar';
import { LokasiVaksin } from './pages/LokasiVaksin/LokasiVaksin';
import { TentangVaksin } from './pages/TentangVaksin/TentangVaksin';
import { Kriteria } from "./pages/KriteriaVaksin/kriteriavaksin";
import { TanyaJawab } from "./pages/TanyaJawab/TanyaJawab";
import { Footer } from './components/Footer';
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar />
        <Homepage />
        <TentangVaksin />
        <Kriteria/>
        <LokasiVaksin />
        <TanyaJawab />
        <Footer />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
