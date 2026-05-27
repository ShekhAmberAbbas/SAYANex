import logo from '../assets/logo.png'

export default function Footer() {

  return (

    <footer
      className="py-5 mt-5"
      style={{
        background: "#FFFFFF",
        borderTop:
          "1px solid rgba(15,23,42,0.06)"
      }}
    >

      <div className="container">

        <div className="row g-5">

          <div className="col-lg-4">

            <h3
              className="fw-bold"
              style={{ color: "#0F172A" }}
            >
              <img src={logo} className='w-50' alt="" />
              
            </h3>

            <p
              className="mt-4"
              style={{
                color: "#64748B",
                lineHeight: "1.8"
              }}
            >
              Building future-ready professionals
              through innovation and practical learning.
            </p>

          </div>

          <div className="col-lg-4">

            <h5 className="fw-bold mb-4">
              Quick Links
            </h5>

            <ul
              className="list-unstyled"
              style={{
                color: "#64748B"
              }}
            >
              <li className="mb-3">Home</li>
              <li className="mb-3">About</li>
              <li className="mb-3">Services</li>
              <li className="mb-3">Contact</li>
            </ul>

          </div>

          <div className="col-lg-4">

            <h5 className="fw-bold mb-4">
              Contact
            </h5>

            <p style={{ color: "#64748B" }}>
              📞 +91 97580 68675
            </p>

            <p style={{ color: "#64748B" }}>
              ✉️ sayanextechnologies@gmail.com
            </p>

          </div>

        </div>

        <hr />

        <div
          className="text-center"
          style={{
            color: "#94A3B8"
          }}
        >
          © 2026 SAYANeX Technologies.
          All Rights Reserved.
        </div>

      </div>

    </footer>

  );
}