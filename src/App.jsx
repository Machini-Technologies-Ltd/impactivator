import "./App.css";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import KickStart from "./components/KickStart";
import Media from "./components/Media";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Banner />
        <KickStart />
        <Benefits />
        <Media />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
