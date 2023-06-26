import React from "react";
import sublinks from "../data";
import { useGlobalContext } from "../Context";
import { GrClose } from "react-icons/gr";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        {sublinks.map((sublink) => (
          <article key={sublink.pageId}>
            <h4>{sublink.page}</h4>
            <div className="sidebar-sublinks">
              {sublink.links.map((sublink) => (
                <a href={sublink.url} key={sublink.id}>
                  {sublink.icon} {sublink.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
      <GrClose className="close-btn" onClick={closeSidebar} />
    </div>
  );
};

export default Sidebar;
