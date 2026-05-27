import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import b1 from '../assets/b1.jpg'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const component = useRef();

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      // HERO ANIMATION
      gsap.from(".hero-content", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });

      gsap.from(".hero-image", {
        x: 100,
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: "power3.out"
      });

      // PARALLAX EFFECT
      gsap.to(".parallax-image", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          scrub: true
        }
      });

      // SERVICES ANIMATION
      gsap.utils.toArray(".service-card").forEach((card) => {

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });

      });

      // WHY CHOOSE US
      gsap.utils.toArray(".why-card").forEach((card) => {

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          scale: 0.8,
          opacity: 0,
          duration: 1
        });

      });

    }, component);

    return () => ctx.revert();

  }, []);

  return (

    <>
      <Navbar />

      <div
        ref={component}
        style={{
          overflowX: "hidden",
          background: "#F8FAFC"
        }}
      >

        {/* HERO SECTION */}
        <section
          className="hero-section position-relative d-flex align-items-center"
          style={{
            minHeight: "100vh",
            background:
              "linear-gradient(135deg,#EFF6FF,#FFFFFF)"
          }}
        >

          {/* Glow Effects */}
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              background: "#3B82F6",
              filter: "blur(120px)",
              opacity: 0.15,
              top: "-100px",
              left: "-100px",
              borderRadius: "50%"
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              background: "#06B6D4",
              filter: "blur(120px)",
              opacity: 0.12,
              bottom: "-100px",
              right: "-80px",
              borderRadius: "50%"
            }}
          ></div>

          <div className="container position-relative">

            <div className="row align-items-center g-5">

              {/* LEFT CONTENT */}
              <div className="col-lg-6">

                <div className="hero-content">

                  <span
                    className="px-4 py-2 rounded-pill d-inline-block mb-4"
                    style={{
                      background: "#DBEAFE",
                      color: "#2563EB",
                      fontWeight: "600"
                    }}
                  >
                    🚀 BUILDING DIGITAL FUTURE
                  </span>

                  <h1
                    className="fw-bold"
                    style={{
                      fontSize: "clamp(3rem,8vw,6rem)",
                      lineHeight: "1.05",
                      color: "#0F172A"
                    }}
                  >
                    SAYANeX
                    <span
                      className="d-block"
                      style={{
                        background:
                          "linear-gradient(135deg,#2563EB,#06B6D4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      Technologies
                    </span>
                  </h1>

                  <p
                    className="mt-4"
                    style={{
                      fontSize: "1.5rem",
                      color: "#2563EB",
                      fontWeight: "600"
                    }}
                  >
                    Building Skills. Creating Solutions.
                  </p>

                  <p
                    className="mt-4"
                    style={{
                      color: "#64748B",
                      fontSize: "1.1rem",
                      lineHeight: "1.9",
                      maxWidth: "600px"
                    }}
                  >
                    Empowering students, startups, and businesses
                    through industry-oriented training,
                    software development, web applications,
                    and innovative digital solutions.
                  </p>

                  <div className="d-flex flex-wrap gap-3 mt-5">

                    <button
                      className="btn btn-lg rounded-pill px-5 py-3 fw-semibold"
                      style={{
                        background:
                          "linear-gradient(135deg,#2563EB,#06B6D4)",
                        color: "#fff",
                        border: "none",
                        boxShadow:
                          "0 10px 30px rgba(37,99,235,0.2)"
                      }}
                    >
                      Explore Programs
                    </button>

                    <button
                      className="btn btn-light btn-lg rounded-pill px-5 py-3 border"
                    >
                      Contact Us
                    </button>

                  </div>

                </div>

              </div>

              {/* RIGHT IMAGE */}
              <div className="col-lg-6">

                <div className="hero-image position-relative">

                  <div
                    className="position-absolute p-3 rounded-4 shadow-lg"
                    style={{
                      top: "40px",
                      left: "-30px",
                      background: "rgba(255,255,255,0.9)",
                      backdropFilter: "blur(10px)",
                      zIndex: 5
                    }}
                  >

                    <h5
                      className="fw-bold mb-1"
                      style={{ color: "#2563EB" }}
                    >
                      5000+
                    </h5>

                    <small className="text-secondary">
                      Students Trained
                    </small>

                  </div>

                  <img
                    src={b1}
                    alt="Students learning"
                    className="parallax-image img-fluid rounded-5 shadow-lg"
                    style={{
                      border:
                        "1px solid rgba(15,23,42,0.06)"
                    }}
                  />

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ABOUT */}
        <section className="py-5 bg-white">

          <div className="container py-5 text-center">

            <h2
              className="fw-bold"
              style={{
                fontSize: "3rem",
                color: "#0F172A"
              }}
            >
              About SAYANeX
            </h2>

            <p
              className="mx-auto mt-4"
              style={{
                maxWidth: "900px",
                color: "#64748B",
                fontSize: "1.1rem",
                lineHeight: "2"
              }}
            >
              SAYANeX Technologies is a modern EdTech and
              Software Solutions company focused on skill
              development, internship programs, software
              engineering, and digital transformation services.
              Our mission is to bridge the gap between academic
              learning and real-world industry requirements.
            </p>

          </div>

        </section>

        {/* SERVICES */}
        <section className="py-5">

          <div className="container py-5">

            <div className="text-center mb-5">

              <h2
                className="fw-bold"
                style={{
                  fontSize: "3rem",
                  color: "#0F172A"
                }}
              >
                Our Services
              </h2>

              <p
                className="mt-3"
                style={{
                  color: "#64748B",
                  fontSize: "1.1rem"
                }}
              >
                Delivering innovation through technology and training.
              </p>

            </div>

            <div className="row g-4">

              {[
                {
                  title: "Summer Internships",
                  desc: "Industry-oriented internships with live projects, mentoring, mock interviews, and placement support.",
                  icon: "🚀"
                },
                {
                  title: "Software Development",
                  desc: "Custom web applications, ERP systems, portals, and scalable software solutions for businesses.",
                  icon: "💻"
                },
                {
                  title: "Corporate Training",
                  desc: "Hands-on technical training programs in Full Stack, Python, AI, IoT, and emerging technologies.",
                  icon: "🎯"
                }
              ].map((item, index) => (

                <div className="col-lg-4" key={index}>

                  <div
                    className="service-card h-100 p-5 rounded-5 bg-white"
                    style={{
                      border:
                        "1px solid rgba(15,23,42,0.06)",
                      boxShadow:
                        "0 10px 40px rgba(15,23,42,0.05)"
                    }}
                  >

                    <div
                      className="d-flex align-items-center justify-content-center rounded-4 mb-4"
                      style={{
                        width: "80px",
                        height: "80px",
                        background:
                          "linear-gradient(135deg,#2563EB,#06B6D4)",
                        fontSize: "2rem"
                      }}
                    >
                      {item.icon}
                    </div>

                    <h3
                      className="fw-bold"
                      style={{
                        color: "#0F172A"
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mt-4"
                      style={{
                        color: "#64748B",
                        lineHeight: "1.9"
                      }}
                    >
                      {item.desc}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* INTERNSHIP SECTION */}
        <section
          className="py-5 position-relative"
          style={{
            background:
              "linear-gradient(135deg,#2563EB,#0EA5E9)"
          }}
        >

          <div className="container py-5">

            <div className="row align-items-center g-5">

              <div className="col-lg-6 text-white">

                <span
                  className="badge px-4 py-3"
                  style={{
                    background: "#FACC15",
                    color: "#0F172A",
                    fontSize: "14px"
                  }}
                >
                  SUMMER INTERNSHIP 2026
                </span>

                <h2
                  className="fw-bold mt-4"
                  style={{
                    fontSize: "4rem",
                    lineHeight: "1.1"
                  }}
                >
                  Learn.
                  <br />
                  Build.
                  <br />
                  Grow.
                </h2>

                <p
                  className="mt-4"
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.9",
                    opacity: 0.9
                  }}
                >
                  Join our online internship program with
                  live Zoom classes, project-based learning,
                  and placement assistance.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">

                  {[
                    "MERN Stack",
                    "Python + Django",
                    "Mock Interviews"
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="px-4 py-3 rounded-pill"
                      style={{
                        background: "rgba(255,255,255,0.15)"
                      }}
                    >
                      {item}
                    </div>

                  ))}

                </div>

              </div>

              {/* FORM */}
              <div className="col-lg-6">

                <div
                  className="bg-white p-5 rounded-5 shadow-lg"
                >

                  <h3
                    className="fw-bold"
                    style={{ color: "#0F172A" }}
                  >
                    Register Now
                  </h3>

                  <p className="text-secondary mt-2">
                    Limited seats available for Summer Internship 2026.
                  </p>

                  <div className="mt-4">

                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control py-3 mb-3 rounded-4"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control py-3 mb-3 rounded-4"
                    />

                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="form-control py-3 mb-4 rounded-4"
                    />

                    <button
                      className="btn w-100 py-3 rounded-4 fw-semibold"
                      style={{
                        background:
                          "linear-gradient(135deg,#2563EB,#06B6D4)",
                        color: "#fff",
                        border: "none"
                      }}
                    >
                      Submit Registration
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* WHY CHOOSE US */}
        <section className="py-5 bg-white">

          <div className="container py-5">

            <div className="text-center mb-5">

              <h2
                className="fw-bold"
                style={{
                  fontSize: "3rem",
                  color: "#0F172A"
                }}
              >
                Why Choose SAYANeX?
              </h2>

            </div>

            <div className="row g-4">

              {[
                "Industry-Oriented Learning",
                "Experienced Mentors",
                "Real Projects & Assignments",
                "Placement Assistance"
              ].map((point, index) => (

                <div className="col-lg-3" key={index}>

                  <div
                    className="why-card bg-light rounded-5 p-5 text-center h-100"
                  >

                    <div className="fs-1 mb-4">
                      ⭐
                    </div>

                    <h5
                      className="fw-bold"
                      style={{
                        color: "#0F172A"
                      }}
                    >
                      {point}
                    </h5>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}