function Navigation() {
  return (
    <section className="navbar">
      <div className="navbar-profile">
        <div className="navbar-profile-image"></div>
        <div className="navbar-profile-text">
          <h3>John Doe</h3>
          <p>Growth and Marketing</p>
        </div>
      </div>

      <div className="navigation">
        <p>
          <i className="fa-solid fa-table-columns"></i>Dashboard
        </p>
        <p className="inactive">
          <i className="fa-solid fa-calendar-days"></i>Activities
        </p>
        <p className="inactive">
          <i className="fa-solid fa-gear"></i>
          Settings
        </p>
      </div>
      <div className="navbar-posts">
        <div className="top">
          <p>
            Posts <i className="fa-solid fa-caret-down"></i>
          </p>
          <i className="fa-solid fa-circle-plus"></i>
        </div>
        <p>
          <i className="fa-regular fa-square-check"></i>Published
        </p>
        <p>
          <i className="fa-regular fa-clock"></i>Scheduled
        </p>
        <p>
          <i className="fa-regular fa-bookmark"></i>Bookmarked
        </p>
      </div>
      <div className="navbar-invite">
          <p><i className="fa-solid fa-plus"></i> Add new member</p>
      </div>
    </section>
  );
}

export default Navigation;
