
import React from "react";
import "./index.css";

const services = [
  "House Wiring",
  "Electrical Repair",
  "Fan & Light Installation",
  "Motor Repair",
  "Inverter Installation",
  "Lenter Piping"
];

export default function App() {
  return (
    <div>
      <header className="navbar">
        <h2>⚡ MR <span>SIDHU</span></h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="login" href="/customer-login">
          Customer Login
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h4>WELCOME TO MR SIDHU</h4>
          <h1>Professional <span>Electrical Services</span></h1>
          <p>Reliable Electrical Solutions For Your Home And Business.</p>
          <a className="btn" href="/book">BOOK A SERVICE →</a>
        </div>
      </section>

      <section className="section" id="services">
        <h2>Our Electrical Services</h2>
        <div className="grid">
          {services.map((item, i) => (
            <div className="service" key={i}>
              <h3>⚡ {item}</h3>
              <p>Professional and reliable electrical service.</p>
              <a href="/book">Book Now →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <h2>About MR SIDHU</h2>
        <p>Quality Electrical Work • Trusted Service • Customer Support</p>
      </section>

      <section className="section" id="login">
        <h2>Account Login</h2>
        <div className="grid">
          <div className="service">
            <h3>Customer Login</h3>
            <a className="btn" href="/customer-login">Login</a>
          </div>
          <div className="service">
            <h3>Admin Login</h3>
            <a className="btn" href="/admin-login">Admin Login</a>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <h2>Contact Us</h2>
        <p>Phone: 8144722094</p>
        <p>Email: sidharthhuika99@gmail.com</p>
        <p>Address: Dakuluguda, Odisha</p>
        <a className="btn"
          href="https://wa.me/918144722094">
          WhatsApp Us
        </a>
      </section>

      <footer>
        <h2>⚡ MR SIDHU</h2>
        <p>Electrical Services</p>
        <p>© 2026 MR SIDHU. All Rights Reserved.</p>
      </footer>
    </div>
  );
            }

