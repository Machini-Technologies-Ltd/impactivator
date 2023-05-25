import "./App.css";
import Banner from "./assets/Pov/banner.jpg";
import Imapact from "./components/Imapact";
import Nfts from "./assets/Pov/2.jpg";
import Info from "./assets/Pov/3.jpg";
import LoginScreen from "./components/LoginScreen";
function App() {
  return (
    <>
      <div className="w-[100%]">
        <img
          src={Banner}
          alt=""
          className="bg-center bg-cover md:h-1/2 md:w-full"
        />

        {/* <img
          src={Nfts}
          className="w-full h-auto object-cover"
          alt=""
          srcset=""
        /> */}
      </div>
      {/* <Imapact /> */}
      {/* <img src={Info} alt="" srcset="" /> */}
      {/* <LoginScreen /> */}
    </>
  );
}

export default App;
