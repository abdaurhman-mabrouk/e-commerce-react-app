import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-div">
      <h1>About E-Commerce Electronic Store</h1>
      <p>
        Welcome to our E-Commerce Electronic Store! We are dedicated to
        providing you with the best electronic products at unbeatable prices.
        Our mission is to make technology accessible to everyone, and we strive
        to offer a wide range of products to meet all your electronic needs.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to deliver high-quality electronic products to our
        customers while providing exceptional customer service. We believe in
        the power of technology to improve lives, and we are committed to making
        the latest gadgets and devices available to everyone.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>
          Customer Satisfaction: We prioritize our customers and aim to exceed
          their expectations.
        </li>
        <li>Quality: We offer only the best products from trusted brands.</li>
        <li>
          Innovation: We stay up-to-date with the latest trends and
          technologies.
        </li>
        <li>
          Integrity: We conduct our business with honesty and transparency.
        </li>
      </ul>
      <h2>Meet Our Team</h2>
      <p>
        Our team is composed of passionate individuals who are experts in the
        field of electronics. We work tirelessly to ensure that our customers
        have a seamless shopping experience and receive the best products and
        services.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or need assistance, please feel free to
        contact us at{' '}
        <a href="mailto:support@example.com">support@example.com</a>. We are
        here to help!
      </p>
    </div>
  );
}

export default About;
