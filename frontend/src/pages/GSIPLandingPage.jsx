import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {
  DatabaseIcon,
  ChartPieIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import krushnaimg from "../assets/krushna4.png";
import govimg from "../assets/gov.png";
import logo from "../assets/logo.png";
import startupimg from "../assets/startup.png";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import dhruvin from "../assets/dhruvin.png";
import profile from "../assets/profile.png";
import poonam_mam from "../assets/poonam_mam.jpg";
import harshit from "../assets/Harshit.jpg";
import ayush from "../assets/ayush.jpg";
import diya from "../assets/diya.png";


export default function GSIPLandingPage({ theme = "default" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("startups");
  const [activeDemoTab, setActiveDemoTab] = useState("startups");
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const teamMembers = [
    {
      name: "Krushna Rothe",
      role: "Team Leader",
      position: "Backend Developer",
      src: krushnaimg,
    },
    { name: "Dhruvin Patel", role: "Member", position: "Frontend Developer" , src: dhruvin },
    { name: "Harshit Mehta", role: "Member", position: "Research Analyst & Architect", src: harshit },
    { name: "Diya Gandhi", role: "Member", position: "UI/UX Designer" , src: diya },
    { name: "Ayush Shah", role: "Member", position: "Frontend Developer" , src: ayush },
    { name: "Manan Suthar", role: "Member", position: "Full Stack Developer", src: profile },
  ];

  const mentors = [
    { name: "Prof. Poonam Faldu", role: "Academic Mentor" , src: poonam_mam },
    { name: "Prof. XYZ", role: "Technical Mentor", src: profile }
  ];

  return (
    <div className={`gsip-landing-page theme-${theme}`}>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="logo-container">
            <img
              src={logo}
              alt="GSIP Logo"
              className="logo-image"
            />
            <span className="logo-text">GSIP</span>
          </div>
          <nav>
            <ul>
              {[
                "Home",
                "About",
                "Features",
                "For You",
                "How It Works",
                "Team",
                "Demo",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="cta-buttons">
            <button className="btn btn-primary">Sign Up</button>
            <button className="btn btn-secondary">Log In</button>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container">
          <h1>Empowering Gujarat's Innovation Ecosystem</h1>
          <p>
            Centralized platform for research, IPR management, and startup
            growth
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary btn-large">Get Started</button>
            <button className="btn btn-secondary btn-large">Learn More</button>
          </div>
        </div>
        <div className="hero-background"></div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <h2>What is Gujarat Startups & Innovation Platform?</h2>
          <p>
            We are a one-stop solution for startups, researchers, investors, and
            policymakers. Our platform connects brilliant minds with the
            resources they need to grow, thrive, and succeed in Gujarat's
            vibrant innovation ecosystem.
          </p>
          <div className="about-grid">
            {[
              {
                title: "Startups",
                description:
                  "Access funding, mentorship, and market connections.",
              },
              {
                title: "Researchers",
                description:
                  "Collaborate on cutting-edge projects and secure intellectual property.",
              },
              {
                title: "Investors",
                description:
                  "Find vetted startups and research projects to invest in.",
              },
              {
                title: "Policymakers",
                description:
                  "Gain insights and tools to support Gujarat's innovation ecosystem.",
              },
            ].map((item, index) => (
              <div key={index} className="about-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <h2>Our Key Features</h2>
          <div className="feature-grid">
            {[
              {
                title: "Unified Data Repository",
                icon: <DatabaseIcon className="feature-icon" />,
                description:
                  "Centralized database for all research, patents, and start-up data.",
              },
              {
                title: "Transparent Monitoring",
                icon: <ChartPieIcon className="feature-icon" />,
                description: "Track project progress and outcomes with ease.",
              },
              {
                title: "Efficient Resource Allocation",
                icon: <TrendingUpIcon className="feature-icon" />,
                description: "Optimize resource use based on real-time data.",
              },
              {
                title: "IPR Management",
                icon: <ShieldCheckIcon className="feature-icon" />,
                description:
                  "Streamlined process for intellectual property management.",
              },
              {
                title: "Support for Innovators & Start-ups",
                icon: <UserGroupIcon className="feature-icon" />,
                description:
                  "Access resources, mentorship, and support services.",
              },
              {
                title: "Collaboration Tools",
                icon: <LinkIcon className="feature-icon" />,
                description: "Enhance collaboration among stakeholders.",
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-container">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#learn-more" className="btn btn-text">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="for-you" id="for-you">
        <div className="container">
          <h2>Why Join GSIP?</h2>
          <div className="tab-container">
            <div className="tab-buttons">
              {["startups", "policymakers"].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  For {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="tab-content">
              {activeTab === "startups" && (
                <div className="tab-pane">
                  <p>
                    GSIP provides startups with unparalleled access to
                    resources, mentorship, and networking opportunities. Our
                    platform is designed to accelerate your growth and help you
                    navigate the challenges of building a successful business in
                    Gujarat's dynamic ecosystem.
                  </p>
                  <p>With GSIP, you can:</p>
                  <ul>
                    <li>Connect with potential investors and secure funding</li>
                    <li>Access a network of experienced mentors</li>
                    <li>Collaborate with researchers and innovators</li>
                    <li>
                      Showcase your products and services to a wider audience
                    </li>
                    <li>Stay updated on relevant policies and opportunities</li>
                  </ul>
                </div>
              )}
              {activeTab === "policymakers" && (
                <div className="tab-pane">
                  <p>
                    GSIP empowers policymakers with real-time data and insights
                    into Gujarat's innovation ecosystem. Our platform provides
                    the tools and information needed to make informed decisions
                    and create policies that foster growth and innovation.
                  </p>
                  <p>With GSIP, policymakers can:</p>
                  <ul>
                    <li>
                      Access comprehensive data on startups, research projects,
                      and patents
                    </li>
                    <li>
                      Monitor the impact of policies and initiatives in
                      real-time
                    </li>
                    <li>
                      Identify emerging trends and sectors for targeted support
                    </li>
                    <li>
                      Facilitate collaboration between academia, industry, and
                      government
                    </li>
                    <li>
                      Streamline processes for grants, approvals, and regulatory
                      compliance
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <h2>How GSIP Works</h2>
          <div className="how-it-works-grid">
            {[
              {
                step: "Sign Up",
                description: "Create your account on the GSIP platform",
              },
              {
                step: "Complete Profile",
                description: "Fill in your details and verify your account",
              },
              {
                step: "Explore Features",
                description:
                  "Discover the tools and resources available to you",
              },
              {
                step: "Connect",
                description:
                  "Network with startups, investors, and researchers",
              },
              {
                step: "Collaborate",
                description:
                  "Engage in projects, apply for funding, or offer support",
              },
              {
                step: "Grow",
                description: "Track your progress and scale your impact",
              },
            ].map((item, index) => (
              <div key={index} className="how-it-works-item">
                <div className="step-number">{index + 1}</div>
                <h3>{item.step}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="demo" id="demo">
        <div className="container">
          <h2>Experience GSIP</h2>
          <p className="demo-description">
            Explore our intuitive dashboards designed for startups and
            policymakers. Get a glimpse of the powerful tools and insights GSIP
            offers to drive innovation and growth in Gujarat.
          </p>
          <div className="demo-tabs">
            <button
              className={`demo-tab ${
                activeDemoTab === "startups" ? "active" : ""
              }`}
              onClick={() => setActiveDemoTab("startups")}
            >
              For Startups
            </button>
            <button
              className={`demo-tab ${
                activeDemoTab === "policymakers" ? "active" : ""
              }`}
              onClick={() => setActiveDemoTab("policymakers")}
            >
              For Policymakers
            </button>
          </div>
          <div className="demo-content">
            {activeDemoTab === "startups" && (
              <div className="demo-dashboard">
                <h3>Startup Dashboard</h3>
                <p>
                  Access funding opportunities, track your progress, and connect
                  with mentors all in one place.
                </p>
                <img
                  src={startupimg}
                  alt="Startup Dashboard"
                  className="demo-image"
                />
              </div>
            )}
            {activeDemoTab === "policymakers" && (
              <div className="demo-dashboard">
                <h3>Policymaker Dashboard</h3>
                <p>
                  Gain real-time insights into Gujarat's innovation ecosystem
                  and make data-driven decisions.
                </p>
                <img
                  src={govimg}
                  alt="Policymaker Dashboard"
                  className="demo-image"
                />
              </div>
            )}
          </div>
          <div className="demo-cta">
            < Link to="/gov/home" >
            <button className="btn btn-primary btn-large "  >
              Request a Demo
            </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="team" id="team">
        <div className="container">
          <h2>Meet the Syntax Samurais</h2>
          <p className="team-subtitle">
            The Development team behind GSIP from Parul Polytechnic Institute,
            Parul University
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-member-card">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="team-member-image"
                  />
                  <div className="team-member-info">
                    <h3>{member.name}</h3>
                    <p className="team-member-role">{member.role}</p>
                    <p className="team-member-position">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="mentors-title">Our Mentors</h3>
          <div className="mentors-grid">
            {mentors.map((mentor, index) => (
              <div key={index} className="team-member mentor">
                <div className="team-member-card">
                  <img
                    src={mentor.src}
                    alt={mentor.name}
                    className="team-member-image"
                  />
                  <div className="team-member-info">
                    <h3>{mentor.name}</h3>
                    <p className="team-member-role">{mentor.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <h2>GSIP Impact</h2>
          <div className="stats-grid">
            {[
              { value: "500+", label: "Startups Supported" },
              { value: "₹100Cr+", label: "Funding Facilitated" },
              { value: "1000+", label: "Research Projects" },
              { value: "200+", label: "Patents Filed" },
            ].map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Join the GSIP Community</h2>
          <p>
            Be part of Gujarat's thriving innovation ecosystem. Start your
            journey with GSIP today!
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Sign Up Now</button>
            <button className="btn btn-secondary btn-large">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                {[
                  "About",
                  "Features",
                  "For You",
                  "How It Works",
                  "Team",
                  "Demo",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(" ", "-")}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-section">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                {["facebook", "twitter", "linkedin"].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com/GSIP`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`icon-${social}`}
                  ></a>
                ))}
              </div>
            </div>
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>Email: info@gsip.gov.in</p>
              <p>Phone: +91 9529499707</p>
              <p>Address: GSIP Office, Gujarat, India</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2023 Gujarat Startups & Innovation Portal. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* GSIPLandingPage.css */

        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");

        :root {
          --primary-color: #2c3e50;
          --secondary-color: #e74c3c;
          --accent-color: #3498db;
          --text-color: #333;
          --bg-color: #f5f5f5;
          --white: #ffffff;
        }

        .theme-blue {
          --primary-color: #1a237e;
          --secondary-color: #0d47a1;
          --accent-color: #42a5f5;
        }

        .theme-green {
          --primary-color: #1b5e20;
          --secondary-color: #2e7d32;
          --accent-color: #66bb6a;
        }

        .theme-purple {
          --primary-color: #4a148c;
          --secondary-color: #6a1b9a;
          --accent-color: #ab47bc;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: "Poppins", sans-serif;
          line-height: 1.6;
          color: var(--text-color);
          background-color: var(--bg-color);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header Styles */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: var(--white);
          padding: 10px 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .header.scrolled {
          padding: 5px 0;
          background-color: rgba(255, 255, 255, 0.95);
        }

        .header .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-container {
          display: flex;
          align-items: center;
        }

        .logo-image {
          width: 50px;
          height: auto;
          margin-right: 10px;
        }

        .logo-text {
          font-size: 24px;
          font-weight: 700;
          color: var(--primary-color);
        }

        nav ul {
          display: flex;
          list-style-type: none;
        }

        nav ul li {
          margin-left: 20px;
        }

        nav ul li a {
          text-decoration: none;
          color: var(--text-color);
          transition: color 0.3s ease;
        }

        nav ul li a:hover {
          color: var(--accent-color);
        }

        .cta-buttons {
          display: flex;
          gap: 10px;
        }

        .btn {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .btn-primary {
          background-color: var(--primary-color);
          color: var(--white);
        }

        .btn-secondary {
          background-color: var(--white);
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .btn-large {
          padding: 12px 24px;
          font-size: 18px;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        /* Hero Section Styles */
        .hero {
          background-color: var(--primary-color);
          color: var(--white);
          padding: 150px 0 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero h1 {
          font-size: 48px;
          margin-bottom: 20px;
          animation: fadeInUp 1s ease-out;
        }

        .hero p {
          font-size: 20px;
          margin-bottom: 30px;
          animation: fadeInUp 1s ease-out 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .hero-cta {
          display: flex;
          justify-content: center;
          gap: 20px;
          animation: fadeInUp 1s ease-out 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("https://source.unsplash.com/random/1600x900/?technology,innovation");
          background-size: cover;
          background-position: center;
          opacity: 0.2;
          z-index: -1;
          animation: zoomIn 20s infinite alternate;
        }

        /* Section Background Styles */
        .about,
        .features,
        .for-you,
        .how-it-works,
        .team,
        .demo {
          position: relative;
        }

        .about::before,
        .features::before,
        .for-you::before,
        .how-it-works::before,
        .team::before,
        .demo::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.1;
          z-index: -1;
        }

        /* About Section Styles */
        .about {
          padding: 100px 0;
          background-color: var(--white);
        }

        .about::before {
          background-image: url("https://source.unsplash.com/random/1600x900/?innovation");
        }

        .about h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 30px;
          color: var(--primary-color);
        }

        .about p {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 50px;
          font-size: 18px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .about-item {
          text-align: center;
          padding: 30px;
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 0.9);
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .about-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .about-item h3 {
          font-size: 24px;
          margin-bottom: 15px;
          color: var(--accent-color);
        }

        /* Features Section Styles */
        .features {
          padding: 100px 0;
          background-color: var(--bg-color);
        }

        .features::before {
          background-image: url("https://source.unsplash.com/random/1600x900/?technology");
        }

        .features h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 50px;
          color: var(--primary-color);
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .feature-card {
          background-color: var(--white);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .feature-icon-container {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--accent-color);
          border-radius: 50%;
          margin-bottom: 20px;
        }

        .feature-icon {
          width: 30px;
          height: 30px;
          color: var(--white);
        }

        .feature-card h3 {
          font-size: 20px;
          margin-bottom: 10px;
          color: var(--primary-color);
        }

        .feature-card p {
          margin-bottom: 20px;
        }

        .btn-text {
          color: var(--accent-color);
          text-decoration: none;
          font-weight: 600;
        }

        /* For You Section Styles */
        .for-you {
          padding: 100px 0;
          background-color: var(--white);
        }

        .for-you::before {
          background-image: url("https://source.unsplash.com/random/1600x900/?startup");
        }

        .for-you h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 50px;
          color: var(--primary-color);
        }

        .tab-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .tab-buttons {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }

        .tab-btn {
          padding: 10px 20px;
          border: none;
          background-color: var(--bg-color);
          color: var(--text-color);
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn.active {
          background-color: var(--accent-color);
          color: var(--white);
        }

        .tab-content {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .tab-pane h3 {
          font-size: 24px;
          margin-bottom: 20px;
          color: var(--accent-color);
        }

        .tab-pane p {
          margin-bottom: 20px;
        }

        .tab-pane ul {
          list-style-type: none;
          padding-left: 20px;
        }

        .tab-pane ul li {
          margin-bottom: 10px;
          position: relative;
        }

        .tab-pane ul li::before {
          content: "•";
          color: var(--accent-color);
          position: absolute;
          left: -20px;
        }

        /* How It Works Section Styles */
        .how-it-works {
          padding: 100px 0;
          background-color: var(--bg-color);
        }

        .how-it-works::before {
          background-image: url("https://source.unsplash.com/random/1600x900/?process");
        }

        .how-it-works h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 50px;
          color: var(--primary-color);
        }

        .how-it-works-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .how-it-works-item {
          background-color: var(--white);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: all 0.3s ease;
        }

        .how-it-works-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .step-number {
          width: 40px;
          height: 40px;
          background-color: var(--accent-color);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          margin: 0 auto 20px;
        }

        .how-it-works-item h3 {
          font-size: 20px;
          margin-bottom: 10px;
          color: var(--primary-color);
        }

        /* Team Section Styles */ /* Team Section Styles */
        /* Team Section Styles */
        .team {
          padding: 100px 0;
          background-color: var(--white);
        }

        .team::before {
          background-image: url("https://source.unsplash.com/random/1600x900/?team");
        }

        .team h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 20px;
          color: var(--primary-color);
        }

        .team-subtitle {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 50px;
          font-size: 18px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 50px;
        }

        .team-member-card {
          background-color: var(--white);
          border: 2px solid var(--border-color);
          /* Add a border */
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          width: 280px;
          /* Fixed width for the card */
          height: 400px;
          /* Fixed height for the card */
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          /* Center-align text */
        }

        .team-member-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .team-member-image-container {
          width: 100%;
          height: 70%;
          /* Adjust height to fit within the card */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .team-member-image {
          width: 85%;
          height: 70%;
          border-radius: 10px;
          padding-top: 5px;
          object-fit: cover;
          /* Cover the area */
          object-position: top center;
          /* Focus on the top part of the image */
        }

        .team-member-info {
          padding: 20px;
          flex: 1;
        }

        .team-member-info h3 {
          font-size: 20px;
          margin-bottom: 5px;
          color: var(--primary-color);
        }

        .team-member-role {
          font-size: 14px;
          color: var(--text-color);
          margin-bottom: 5px;
        }

        .team-member-position {
          font-size: 16px;
          color: var(--accent-color);
          font-weight: 600;
        }

        .mentors-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          max-width: 800px;
          margin: 0 auto;
        }

        .mentors-title {
          text-align: center;
          font-size: 28px;
          margin-bottom: 30px;
          color: var(--primary-color);
        }


        /* Demo Section Styles */
        .demo {
          padding: 100px 0;
          background-color: var(--bg-color);
        }

        .demo::before {
          background-image: url("https://source.unsplash.com/random/1600x900/?dashboard");
        }

        .demo h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 20px;
          color: var(--primary-color);
        }

        .demo-description {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 50px;
          font-size: 18px;
        }

        .demo-tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }

        .demo-tab {
          padding: 10px 20px;
          border: none;
          background-color: var(--bg-color);
          color: var(--text-color);
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .demo-tab.active {
          background-color: var(--accent-color);
          color: var(--white);
        }

        .demo-content {
          background-color: var(--white);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .demo-dashboard h3 {
          font-size: 24px;
          margin-bottom: 20px;
          color: var(--primary-color);
        }

        .demo-dashboard p {
          margin-bottom: 30px;
        }

        .demo-image {
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .demo-cta {
          text-align: center;
          margin-top: 50px;
        }

        /* Stats Section Styles */
        .stats {
          padding: 100px 0;
          background-color: var(--primary-color);
          color: var(--white);
        }

        .stats h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 50px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 18px;
        }

        /* CTA Section Styles */
        .cta-section {
          padding: 100px 0;
          background-color: var(--accent-color);
          color: var(--white);
          text-align: center;
        }

        .cta-section h2 {
          font-size: 36px;
          margin-bottom: 20px;
        }

        .cta-section p {
          font-size: 18px;
          margin-bottom: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        /* Footer Styles */
        footer {
          background-color: var(--primary-color);
          color: var(--white);
          padding: 50px 0 20px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-bottom: 30px;
        }

        .footer-section h3 {
          font-size: 20px;
          margin-bottom: 20px;
        }

        .footer-section ul {
          list-style-type: none;
        }

        .footer-section ul li {
          margin-bottom: 10px;
        }

        .footer-section ul li a {
          color: var(--white);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-section ul li a:hover {
          color: var(--accent-color);
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icons a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          transform: translateY(-5px);
        }

        .icon-facebook,
        .icon-twitter,
        .icon-linkedin {
          width: 20px;
          height: 20px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        .icon-facebook {
          background-image: url(${facebook});
        }

        .icon-twitter {
          background-image: url(${twitter});
        }

        .icon-linkedin {
          background-image: url(${linkedin});");
        }

        .footer-bottom {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.1);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header .container {
            flex-direction: column;
            align-items: center;
          }

          nav ul {
            margin-top: 20px;
          }

          .hero h1 {
            font-size: 36px;
          }

          .hero p {
            font-size: 18px;
          }

          .about-grid,
          .feature-grid,
          .how-it-works-grid,
          .team-grid,
          .mentors-grid,
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .hero h1 {
            font-size: 28px;
          }

          .hero p {
            font-size: 16px;
          }

          .btn-large {
            padding: 10px 20px;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
