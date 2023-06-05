function HeaderSection() {
  return (
    <header>
      <div className="header-container">
        <div className="left-section">
          <h1>Simple Store</h1>
        </div>
        <div className="right-section">
          <ul>
            <li>About</li>
            <li>Profile</li>
            <li>Log Out</li>
          </ul>
        </div>
      </div>
      <div className="content-section">
        <div className="greeting">
          <h2>Hi!</h2>
          <p>Welcome to Simple Store</p>
        </div>
        <div className="person-image">
          <img src="path/to/person-image.png" alt="Person" />
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;