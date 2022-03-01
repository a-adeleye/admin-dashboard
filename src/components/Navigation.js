import React from "react";

function Navigation() {
  const [collapsed, setCollapsed] = React.useState(false);

  function toggle() {
    setCollapsed((prev) => (prev = !prev));
  }

  const navbarStyle = collapsed
    ? {
        width: "80px",
        alignItems: "center",
        padding: "2em",
        textAlign: "center",
      }
    : { transition: "0.2s" };

  const topStyle = collapsed ? {justifyContent: "center"} : {transition: "0.2s"};

  return (
    <section className="navbar" style={navbarStyle}>
      <div className="nav-toggle">
      {!collapsed && (
          <i className="fa-solid fa-angles-left" onClick={toggle}></i>
        )}
        {collapsed && (
          <i className="fa-solid fa-angles-right" onClick={toggle}></i>
        )}
      </div>
      <div className="navbar-profile">
        <div className="navbar-profile-image"></div>
        {!collapsed && (
          <div className="navbar-profile-text">
            <h3>John Doe</h3>
            <p>Growth and Marketing</p>
          </div>
        )}
        
      </div>

      <div className="navigation">
        <p>
          <i className="fa-solid fa-table-columns"></i>
          {!collapsed && "Dashboard"}
        </p>
        <p className="inactive">
          <i className="fa-solid fa-calendar-days"></i>
          {!collapsed && "Activities"}
        </p>
        <p className="inactive">
          <i className="fa-solid fa-gear"></i>
          {!collapsed && "Settings"}
        </p>
      </div>
      <div className="navbar-posts">
        <div className="top" style={topStyle}>
          <p>
            Posts {!collapsed && <i className="fa-solid fa-caret-down"></i>}
          </p>
          {!collapsed && <i className="fa-solid fa-circle-plus"></i>}
        </div>
        <p>
          <i className="fa-regular fa-square-check"></i>
          {!collapsed && "Published"}
        </p>
        <p>
          <i className="fa-regular fa-clock"></i>
          {!collapsed && "Scheduled"}
        </p>
        <p>
          <i className="fa-regular fa-bookmark"></i>
          {!collapsed && "Bookmarked"}
        </p>
      </div>
      <div className="navbar-invite">
        <p>
          <i className="fa-solid fa-plus"></i> {!collapsed && "Add new member"}
        </p>
      </div>
    </section>
  );
}

export default Navigation;
