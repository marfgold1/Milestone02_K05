import { withStyles } from '@material-ui/core/styles';
import { Box, CssBaseline } from "@material-ui/core";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { LokasiVaksin } from "./pages/LokasiVaksin/LokasiVaksin";
import { TentangVaksin } from "./pages/TentangVaksin/TentangVaksin";
import Footer from "./components/Footer";

const HomepageWrapper = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: '100%'
  }
}))(Box)

function App() {
  return (
    <>
      <CssBaseline>
        <HomepageWrapper>
          <Navbar />
          <Homepage />
        </HomepageWrapper>
        <TentangVaksin />
        <LokasiVaksin />
        <Footer />
      </CssBaseline>
    </>
  );
}

export default App;
