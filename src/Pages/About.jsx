
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaLaptopCode,
  FaGraduationCap,
  FaGlobe,
  FaUserTie,
  FaCode,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaBriefcase
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


gsap.registerPlugin(ScrollTrigger);

export default function About() {

  const component = useRef();

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      // HERO
      gsap.from(".about-hero", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });

      // IMAGE
      gsap.from(".about-image", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      // CONTENT
      gsap.from(".about-content", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      // CARDS
      gsap.utils.toArray(".info-card").forEach((card) => {

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%"
          },
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });

      });

      // PARALLAX
      gsap.to(".parallax-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          scrub: true
        }
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

        {/* HERO */}
        <section
          className="hero-section position-relative d-flex align-items-center"
          style={{
            minHeight: "85vh",
            background:
              "linear-gradient(135deg,#EFF6FF,#FFFFFF)",
            paddingTop: "120px"
          }}
        >

          <div
            className="position-absolute"
            style={{
              width: "400px",
              height: "400px",
              background: "#3B82F6",
              filter: "blur(120px)",
              opacity: 0.12,
              top: "-100px",
              right: "-80px",
              borderRadius: "50%"
            }}
          ></div>

          <div className="container position-relative">

            <div className="text-center about-hero">

              <span
                className="px-4 py-2 rounded-pill d-inline-block mb-4"
                style={{
                  background: "#DBEAFE",
                  color: "#2563EB",
                  fontWeight: "600"
                }}
              >
                ABOUT SAYANeX TECHNOLOGIES
              </span>

              <h1
                className="fw-bold"
                style={{
                  fontSize: "clamp(3rem,8vw,5.5rem)",
                  color: "#0F172A",
                  lineHeight: "1.1"
                }}
              >
                Building Skills.
                <br />

                <span
                  style={{
                    background:
                      "linear-gradient(135deg,#2563EB,#06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Creating Solutions.
                </span>

              </h1>

              <p
                className="mx-auto mt-4"
                style={{
                  maxWidth: "900px",
                  color: "#64748B",
                  fontSize: "1.2rem",
                  lineHeight: "2"
                }}
              >
                SAYANeX Technologies is an emerging technology,
                software development, and skill development company
                committed to bridging the gap between academic
                learning and real-world industry requirements.
              </p>

            </div>

          </div>

        </section>


        {/* ABOUT SECTION */}
        <section className="py-5 bg-white">

          <div className="container py-5">

            <div className="row align-items-center g-5">

              {/* IMAGE */}
              <div className="col-lg-6">

                <div className="about-image position-relative">

                  <div
                    className="position-absolute rounded-circle"
                    style={{
                      width: "220px",
                      height: "220px",
                      background:
                        "linear-gradient(135deg,#2563EB,#06B6D4)",
                      opacity: 0.1,
                      top: "-40px",
                      left: "-40px"
                    }}
                  ></div>

                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                    alt="about"
                    className="parallax-bg img-fluid rounded-5 shadow-lg position-relative"
                    style={{ zIndex: 2 }}
                  />

                </div>

              </div>


              {/* CONTENT */}
              <div className="col-lg-6">

                <div className="about-content">

                  <h2
                    className="fw-bold mb-4"
                    style={{
                      fontSize: "3rem",
                      color: "#0F172A"
                    }}
                  >
                    Who We Are
                  </h2>

                  <p
                    style={{
                      color: "#64748B",
                      lineHeight: "2",
                      fontSize: "1.1rem"
                    }}
                  >
                    SAYANeX Technologies is an emerging technology,
                    software development, and skill development company
                    committed to bridging the gap between academic
                    learning and real-world industry requirements.

                    Founded with a vision to build an innovation-driven
                    technology ecosystem, SAYANeX focuses on empowering
                    students, institutions, startups, and organizations
                    through technology-driven solutions and
                    industry-oriented learning initiatives.
                  </p>

                  <p
                    className="mt-4"
                    style={{
                      color: "#64748B",
                      lineHeight: "2",
                      fontSize: "1.1rem"
                    }}
                  >
                    At SAYANeX, we believe learning should go beyond
                    theoretical knowledge and align with practical
                    implementation, innovation, and real industry exposure.

                    Our philosophy revolves around building, developing,
                    innovating, and solving real-world challenges through
                    modern technology and skill-based education.
                  </p>

                  <p
                    className="mt-4"
                    style={{
                      color: "#64748B",
                      lineHeight: "2",
                      fontSize: "1.1rem"
                    }}
                  >
                    Driven by a passionate team of technocrats and
                    professionals, SAYANeX brings together expertise
                    in technology, operations, training, and business
                    development with more than 17 years of industry
                    exposure.
                  </p>


                  <div className="row mt-5 g-4">

                    {[
                      {
                        title: "Software Development",
                        icon: <FaLaptopCode />
                      },
                      {
                        title: "Web & App Development",
                        icon: <FaGlobe />
                      },
                      {
                        title: "Industry Training",
                        icon: <FaGraduationCap />
                      },
                      {
                        title: "Internship Programs",
                        icon: <FaUserTie />
                      }
                    ].map((item, index) => (

                      <div className="col-md-6" key={index}>

                        <div
                          className="p-4 rounded-4 h-100"
                          style={{
                            background: "#F8FAFC",
                            border:
                              "1px solid rgba(15,23,42,0.05)",
                            transition: "0.3s"
                          }}
                        >

                          <div
                            className="mb-3"
                            style={{
                              color: "#2563EB",
                              fontSize: "2rem"
                            }}
                          >
                            {item.icon}
                          </div>

                          <h5
                            className="fw-bold mb-0"
                            style={{
                              color: "#0F172A"
                            }}
                          >
                            {item.title}
                          </h5>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

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
                What We Offer
              </h2>

              <p
                className="mt-4 mx-auto"
                style={{
                  maxWidth: "800px",
                  color: "#64748B",
                  fontSize: "1.1rem",
                  lineHeight: "2"
                }}
              >
                SAYANeX specializes in delivering high-quality
                software solutions while simultaneously creating
                career-oriented learning opportunities for students
                and young professionals.
              </p>

            </div>

            <div className="row g-4">

              {[
                {
                  title: "Practical Technical Training",
                  icon: <FaCode />
                },
                {
                  title: "Live Interactive Classes",
                  icon: <FaChalkboardTeacher />
                },
                {
                  title: "Real-World Project Exposure",
                  icon: <FaProjectDiagram />
                },
                {
                  title: "Placement-Oriented Learning",
                  icon: <FaBriefcase />
                }
              ].map((item, index) => (

                <div className="col-lg-3 col-md-6" key={index}>

                  <div
                    className="info-card bg-white rounded-5 p-5 h-100"
                    style={{
                      border:
                        "1px solid rgba(15,23,42,0.05)",
                      boxShadow:
                        "0 10px 40px rgba(15,23,42,0.05)",
                      transition: "0.3s"
                    }}
                  >

                    <div
                      className="mb-4 d-flex align-items-center justify-content-center rounded-4"
                      style={{
                        width: "70px",
                        height: "70px",
                        background:
                          "linear-gradient(135deg,#2563EB,#06B6D4)",
                        color: "#fff",
                        fontSize: "1.8rem"
                      }}
                    >
                      {item.icon}
                    </div>

                    <h5
                      className="fw-bold"
                      style={{
                        color: "#0F172A",
                        lineHeight: "1.6"
                      }}
                    >
                      {item.title}
                    </h5>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* TECHNOLOGIES */}
        <section
          className="py-5"
          style={{
            background:
              "linear-gradient(135deg,#2563EB,#0EA5E9)"
          }}
        >

          <div className="container py-5 text-center text-white">

            <h2
              className="fw-bold"
              style={{
                fontSize: "3rem"
              }}
            >
              Technologies We Teach
            </h2>

            <p
              className="mt-4 mx-auto"
              style={{
                maxWidth: "850px",
                fontSize: "1.1rem",
                lineHeight: "2",
                opacity: 0.9
              }}
            >
              We offer training in trending and high-demand technologies
              aligned with modern software industry standards.
            </p>

            <div className="row mt-5 g-4">

              {[
                "MERN Stack",
                "Python with Django",
                "Full Stack JAVA",
                "Full Stack PHP",
                "Web Technologies",
                "Software Engineering"
              ].map((tech, index) => (

                <div className="col-lg-4 col-md-6" key={index}>

                  <div
                    className="rounded-5 p-5 h-100"
                    style={{
                      background:
                        "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(10px)",
                      border:
                        "1px solid rgba(255,255,255,0.2)"
                    }}
                  >

                    <h4 className="fw-bold">
                      {tech}
                    </h4>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* EXPERIENCE */}
        <section className="py-5 bg-light">

          <div className="container py-5">

            <div className="row align-items-center g-5">

              <div className="col-lg-6">

                <h2
                  className="fw-bold"
                  style={{
                    fontSize: "3rem",
                    color: "#0F172A"
                  }}
                >
                  Industry Experience
                </h2>

                <p
                  className="mt-4"
                  style={{
                    color: "#64748B",
                    lineHeight: "2",
                    fontSize: "1.1rem"
                  }}
                >
                  The founding leadership of SAYANeX carries
                  more than 17 years of experience in the IT
                  industry with extensive exposure to software
                  engineering, enterprise solutions,
                  technical training, research, and
                  large-scale project execution.
                </p>

                <p
                  className="mt-4"
                  style={{
                    color: "#64748B",
                    lineHeight: "2",
                    fontSize: "1.1rem"
                  }}
                >
                  Our mission is to create a scalable ecosystem
                  where Technology, Innovation, Skills, and
                  Employability work together seamlessly.
                </p>

              </div>

              <div className="col-lg-6">

                <div className="row g-4">

                  {[
                    {
                      number: "17+",
                      label: "Years Experience"
                    },
                    {
                      number: "5000+",
                      label: "Students Trained"
                    },
                    {
                      number: "100+",
                      label: "Projects"
                    },
                    {
                      number: "24/7",
                      label: "Mentorship"
                    }
                  ].map((item, index) => (

                    <div className="col-6" key={index}>

                      <div
                        className="info-card bg-white rounded-5 p-5 text-center h-100"
                        style={{
                          boxShadow:
                            "0 10px 40px rgba(15,23,42,0.05)"
                        }}
                      >

                        <h2
                          className="fw-bold"
                          style={{
                            color: "#2563EB",
                            fontSize: "3rem"
                          }}
                        >
                          {item.number}
                        </h2>

                        <p
                          className="mt-3 mb-0"
                          style={{
                            color: "#64748B",
                            fontWeight: "600"
                          }}
                        >
                          {item.label}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* VISION MISSION */}
        <section className="py-5 bg-white">

          <div className="container py-5">

            <div className="row g-5">

              <div className="col-lg-6">

                <div
                  className="info-card h-100 p-5 rounded-5"
                  style={{
                    background: "#F8FAFC",
                    border:
                      "1px solid rgba(15,23,42,0.05)"
                  }}
                >

                  <h2
                    className="fw-bold mb-4"
                    style={{
                      color: "#2563EB"
                    }}
                  >
                    Our Vision
                  </h2>

                  <p
                    style={{
                      color: "#64748B",
                      lineHeight: "2",
                      fontSize: "1.1rem"
                    }}
                  >
                    To build a future-ready generation of skilled
                    professionals and innovative digital solutions
                    that contribute to technological growth and
                    employability across industries.
                  </p>

                </div>

              </div>


              <div className="col-lg-6">

                <div
                  className="info-card h-100 p-5 rounded-5"
                  style={{
                    background: "#F8FAFC",
                    border:
                      "1px solid rgba(15,23,42,0.05)"
                  }}
                >

                  <h2
                    className="fw-bold mb-4"
                    style={{
                      color: "#2563EB"
                    }}
                  >
                    Our Mission
                  </h2>

                  <p
                    style={{
                      color: "#64748B",
                      lineHeight: "2",
                      fontSize: "1.1rem"
                    }}
                  >
                    To empower learners and organizations through
                    practical education, technology innovation,
                    and industry-oriented solutions.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

      <Footer />

    </>
  );
}

