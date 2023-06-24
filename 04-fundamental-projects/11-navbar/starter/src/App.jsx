import { useState } from "react";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";

const App = () => {
  const [showLinks, setShowLinks] = useState(true);
  const toggleLinks = (e) => {
    setShowLinks(!showLinks);
  };
  return (
    <nav>
      <header>
        <img src={logo}></img>
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>
      </header>
      <NavLinks showLinks={showLinks}/>
      <SocialLinks/>
    </nav>
  );
};
export default App;
