import "./App.css";
import logo from "./assets/img/logo.svg";
import banner from "./assets/img/hero.png";
import soles from "./assets/img/soles.png";
import email from "./assets/img/email.png";
import twitter from "./assets/img/twitter.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-content">
          <img className="max-w-full" src={logo}></img>
        </div>
      </div>
      <div className="banner">
        <div className="banner-content">
          <img className="max-w-full" src={banner}></img>
        </div>
      </div>
      <div className="partnership">
        <div className="partnership-content">
          <h1>in partnership with</h1>
          <img className="max-w-full" src={soles}></img>
        </div>
      </div>
      <div className="footer">
        <ul className="footer-content">
          <li className="comming-soon">
            <h1>comming soon</h1>
          </li>
          <li className="comming-soon-heading">
            <span>
              <img src={twitter}></img>
            </span>
            <h1>follow us on twitter</h1>
          </li>
          <li className="comming-soon-heading">
            <span>
              <img src={email}></img>
            </span>
            <h1>contact us</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
