import React from "react";
import sublinks from "../data";
import { useGlobalContext } from "../Context";

const NavLinks = () => {
    const {setPageId} = useGlobalContext()
  return (
    <div className="nav-links">
      {sublinks.map((link) => (
        <a className="nav-link" key={link.pageId} onMouseEnter={() => {setPageId(link.pageId)}} onMouseLeave={() => setPageId(null)}>
          {link.page}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
