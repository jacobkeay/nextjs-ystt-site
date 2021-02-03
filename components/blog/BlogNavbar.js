import React from "react";
import Link from "next/link";

class BlogNavbar extends React.Component {
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
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-cortado"
        id="main-nav"
      >
        <div className="container d-flex justify-between align-center">
          <div className="pt-2 d-flex align-items-center">
            <img src="/cortado-logo.jpg" height="50" alt="logo here"></img>
            <h5 className="ml-2 text-white">Cortado Blog</h5>
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
                <Link href="/cortado/blog">
                  <a className="nav-link">
                    <i className="far fa-edit"></i> Blog
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/cortado/about">
                  <a className="nav-link">
                    <i className="fas fa-info-circle"></i> About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/cortado/blog">
                  <a className="nav-link">
                    <i className="fas fa-search"></i> Find an Article
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">
                    <i className="fas fa-backward"></i> Back to Homepage
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default BlogNavbar;
