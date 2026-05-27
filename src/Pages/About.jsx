import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {

  return (

    <>
      <Navbar />

      <section
        className="py-5"
        style={{
          marginTop: "100px",
          minHeight: "100vh",
          background: "#F8FAFC"
        }}
      >

        <div className="container">

          <div className="text-center mb-5">

            <h1 className="display-3 fw-bold">
              About SAYANeX
            </h1>

            <p className="fs-5 text-secondary mt-4">
              Modern EdTech & Software Company
            </p>

          </div>

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="about"
                className="img-fluid rounded-5 shadow"
              />

            </div>

            <div className="col-lg-6">

              <h2 className="fw-bold mb-4">
                Who We Are
              </h2>

              <p
                className="text-secondary"
                style={{
                  lineHeight: "1.9",
                  fontSize: "1.1rem"
                }}
              >
                SAYANeX Technologies helps students,
                startups and businesses through
                modern training programs,
                software development services,
                AI solutions and internships.
              </p>

              <p
                className="text-secondary mt-4"
                style={{
                  lineHeight: "1.9",
                  fontSize: "1.1rem"
                }}
              >
                Our mission is to bridge the gap
                between academic learning and
                real-world industry requirements.
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}