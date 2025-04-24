import React from 'react';

export default function Navbar(props) {
  const textColor = props.mode === 'dark' ? 'light' : 'dark';

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${textColor}`} href="#" onClick={() => props.setPage('home')}>
          {props.title}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className={`nav-link text-${textColor}`} href="#" onClick={() => props.setPage('home')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${textColor}`} href="#" onClick={() => props.setPage('about')}>
                About
              </a>
            </li>
          </ul>

          {/* Color Theme Buttons */}
          <div className="d-flex align-items-center me-3">
            {['primary', 'danger', 'success', 'warning'].map((color) => (
              <div
                key={color}
                onClick={() => props.changeColor(color)}
                style={{
                  backgroundColor: `var(--bs-${color})`,
                  height: '20px',
                  width: '20px',
                  borderRadius: '3px',
                  margin: '0 5px',
                  cursor: 'pointer',
                  border: '2px solid white',
                }}
                title={`Set ${color} background`}
              />
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <div className={`form-check form-switch text-${textColor}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" />
            <label className="form-check-label">Toggle Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
