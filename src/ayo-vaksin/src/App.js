import { CssBaseline } from "@material-ui/core";
import './App.css'
import { LokasiVaksin } from "./pages/LokasiVaksin/LokasiVaksin";
import { TentangVaksin } from "./pages/TentangVaksin/TentangVaksin";

function App() {
  return (
    <>
      <CssBaseline>
        <TentangVaksin />
        <LokasiVaksin />
      </CssBaseline>
    </>
  );
}

export default App;
