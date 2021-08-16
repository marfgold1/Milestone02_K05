import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './theme';
import { Homepage } from './pages/Homepage';
import { Navbar } from './components/Navbar';
import { LokasiVaksin } from './pages/LokasiVaksin/LokasiVaksin';
import { TentangVaksin } from './pages/TentangVaksin/TentangVaksin';
import { Kriteria } from "./pages/KriteriaVaksin/kriteriavaksin";
import { TanyaJawab } from "./pages/TanyaJawab/tanyajawab";
import { Footer } from './components/Footer';
import './App.css'

const pages = [
  { key: 'home', component: Homepage },
  { key: 'tentang', component: TentangVaksin, label: 'Tentang' },
  { key: 'kriteria', component: Kriteria, label: 'Kriteria' },
  { key: 'lokasi', component: LokasiVaksin, label: 'Lokasi' },
  { key: 'qna', component: TanyaJawab, label: 'Tanya Jawab' },
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar links={pages.slice(1)} />
        {pages.map((page) => (
          <div key={page.key} id={page.key}>
            <page.component />
          </div>
        ))}
        <Footer />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
