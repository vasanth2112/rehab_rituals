import "./App.scss";
import HeaderContainer from "./Components/Header/HeaderContainer.jsx";
import AboutUsContainer from "./Components/AboutUs/AboutUsContainer.jsx";
import OurServiceContainer from "./Components/OurServices/OurServiceContainer.jsx";
import OurTeamContainer from "./Components/OurTeam/OurTeamContainer.jsx";
import FooterContainer from "./Components/ContactUs/FooterContainer.jsx";

function App() {
  return (
    <>
      <HeaderContainer />
      <AboutUsContainer />
      <OurServiceContainer />
      <OurTeamContainer />
      <FooterContainer />
    </>
  );
}

export default App;
