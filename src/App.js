import "./App.css";
import Page from "./Components/LandingPage/Page";
import Footer from "./Components/Layout/Footer";
import { NavBar } from "./Components/Layout/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Page />
      <Footer />
    </div>
  );
}

export default App;
