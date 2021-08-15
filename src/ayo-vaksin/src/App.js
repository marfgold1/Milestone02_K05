import { CssBaseline } from "@material-ui/core";
import './App.css'
import { LokasiVaksin } from "./pages/LokasiVaksin/LokasiVaksin";
import { TentangVaksin } from "./pages/TentangVaksin/TentangVaksin";
import { Kriteria } from "./pages/KriteriaVaksin/kriteriavaksin";
import { TanyaJawab } from "./pages/TanyaJawab/TanyaJawab";

function App() {
  return (
    <>
      <CssBaseline>
        <TentangVaksin />
        <Kriteria/>
        <LokasiVaksin />
        <TanyaJawab />
      </CssBaseline>
    </>
  );
}

export default App;
