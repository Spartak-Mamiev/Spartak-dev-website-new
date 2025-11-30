import './Header.css';

export function Header() {
  return (
    <div className="header">
      <img
        src="public/logo.png"
        alt="Logo"
        className="logo"
      />
      <div className="nav-bar">
        <ul>
          <li className="home">
            <img
              src="home.png"
              alt="home icon"
            />
          </li>
          <li className="about">
            <img
              src="about.png"
              alt="about icon"
            />
          </li>
          <li className="skills">
            <img
              src="skills.png"
              alt="skills icon"
            />
          </li>
          <li className="projects">
            <img
              src="projects.png"
              alt="projects icon"
            />
          </li>
          <li className="contact">
            <img
              src="contact.png"
              alt="contact icon"
            />
          </li>
        </ul>
      </div>

      <div className="mode-toggle-container">
        <label htmlFor="toggle">
          <img
            src="sun-icon.png"
            alt="sun icon"
          />
        </label>
        <input
          type="checkbox"
          id="toggle"
        />
      </div>
    </div>
  );
}
