import { CssBaseline } from "@material-ui/core";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { LokasiVaksin } from "./pages/LokasiVaksin/LokasiVaksin";
import { TentangVaksin } from "./pages/TentangVaksin/TentangVaksin";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CssBaseline>
        <Navbar />
        <Homepage />
        <TentangVaksin />
        <LokasiVaksin />
        <Footer />
      </CssBaseline>
    </>
  );
}

export default App;
