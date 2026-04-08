import React from "react";
import { Link } from "react-router-dom";


const PrivacyPolicy = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1>Privacy Policy</h1>
        <p><strong>Updated at:</strong> 2022-06-07</p>

        <p>
          Timeless Aesthetics ("we", "our", or "us") is committed to protecting your privacy.
          This Privacy Policy explains how your personal information is collected, used, and disclosed.
        </p>

        <h2>Definitions</h2>
        <p><strong>Company:</strong> Timeless Aesthetics Metros LLP, Gurgaon, India</p>
        <p>
          <strong>Website:</strong>{" "}
          <a href="https://timelessaesthetics.in/" target="_blank" rel="noreferrer">
            https://timelessaesthetics.in/
          </a>
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Name / Username</li>
          <li>Phone Number</li>
          <li>Email Address</li>
          <li>Billing Address</li>
          <li>Password</li>
        </ul>

        <h2>How We Use Information</h2>
        <ul>
          <li>To personalize your experience</li>
          <li>To improve our services</li>
          <li>To provide customer support</li>
          <li>To process transactions</li>
          <li>To send updates and emails</li>
        </ul>

        <h2>Third-Party Sharing</h2>
        <p>
          We may share your data with trusted partners, service providers, or legal authorities when required.
        </p>

        <h2>Email Usage</h2>
        <p>
          You may receive emails from us. You can unsubscribe anytime using the link in the email.
        </p>

        <h2>Data Security</h2>
        <p>
          We use SSL and secure systems to protect your data, but no system is 100% secure.
        </p>

        <h2>Cookies</h2>
        <p>
          We use cookies to improve your experience and analyze website traffic.
        </p>

        <h2>Children’s Privacy</h2>
        <p>
          We do not knowingly collect data from children under 13 without parental consent.
        </p>

        <h2>GDPR Rights</h2>
        <p>
          You can request access, update, or deletion of your personal data.
        </p>

        <h2>Changes to Policy</h2>
        <p>
          We may update this Privacy Policy from time to time.
        </p>

        <h2>Contact Us</h2>
        <p>Email: contact@timelessaesthetics.in</p>
        <p>Phone: (+91) 7009939238</p>
        <p>
        <Link to="/contact">
  Contact Page
</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    padding: "40px 0",
  },
  container: {
    maxWidth: "900px",
    margin: "auto",
    background: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
};

export default PrivacyPolicy;