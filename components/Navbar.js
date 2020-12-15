import React from "react";
import Link from "next/link";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary"
        id="main-nav"
      >
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/logo-big-white.png" height="50" alt="image here"></img>
            </a>
          </Link>
          <div className="pt-2">
            <h5 className="text-white">York Student Think Tank</h5>
          </div>
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/research">
                  <a className="nav-link">Research</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/cortado">
                  <a className="nav-link">Cortado</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/faqs">
                  <a className="nav-link">FAQs</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Get Involved</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
