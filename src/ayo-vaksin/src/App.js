import { CssBaseline } from "@material-ui/core";
import './App.css'
import { LokasiVaksin } from "./pages/LokasiVaksin/LokasiVaksin";
import { TentangVaksin } from "./pages/TentangVaksin/TentangVaksin";
import { Kriteria } from "./pages/KriteriaVaksin/kriteriavaksin";

function App() {
  return (
    <>
      <CssBaseline>
        <TentangVaksin />
        <Kriteria/>
        <LokasiVaksin />
      </CssBaseline>
    </>
  );
}

export default App;
