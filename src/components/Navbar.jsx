import { Link } from "react-router-dom";
import logo from '../assets/logo2.png'
export default function Navbar() {

  return (

    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(15,23,42,0.06)"
      }}
    >

      <div className="container ">

        <Link
          className="navbar-brand fw-bold fs-3 w-25 "
          to="/"
          style={{ color: "#0F172A" }}
        >
          <img src={logo} className="w-25 pb-3 pe-1" alt="" />
          SAYAN
          <span style={{ color: "#2563EB" }}>
            eX
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navMenu"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>

            <li className="nav-item">

              <button
                className="btn rounded-pill px-4 py-2 fw-semibold"
                style={{
                  background:
                    "linear-gradient(135deg,#2563EB,#06B6D4)",
                  color: "#fff",
                  border: "none"
                }}
              >
                Get Started
              </button>

            </li>

          </ul>

        </div>

      </div>

    </nav>

  );
}