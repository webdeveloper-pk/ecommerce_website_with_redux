import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
            <div className={styles.footer_links}>
              <h4>QUESTIONS</h4>
              <ul>
                <li>
                  <Link to="#">How to buy</Link>
                </li>
                <li>
                  <Link to="#">Payment</Link>
                </li>
                <li>
                  <Link to="#">Shipping</Link>
                </li>
                <li>
                  <Link to="#">Track Order</Link>
                </li>
                <li>
                  <Link to="#">Returns</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_links}>
              <h4>CATEGORIES</h4>
              <ul>
                <li>
                  <Link to="#">Women</Link>
                </li>
                <li>
                  <Link to="#">Men</Link>
                </li>
                <li>
                  <Link to="#">Kid</Link>
                </li>
                <li>
                  <Link to="#">New trend</Link>
                </li>
                <li>
                  <Link to="#">Sales</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_links}>
              <h4>VOLG ONS</h4>
              <ul>
                <li>
                  <Link to="#">Facebook</Link>
                </li>
                <li>
                  <Link to="#">Twitter</Link>
                </li>
                <li>
                  <Link to="#">YouTube</Link>
                </li>
                <li>
                  <Link to="#">Instagram</Link>
                </li>
                <li>
                  <Link to="#">Pinterest</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_links}>
              <h4>CONTACT US</h4>
              <p>Monday - Sunday: 09:00 - 22:00</p>
              <p>1123 7th Str, Ottawa, CA 96312</p>
              <p>
                <span to="#">+84.0248.3579</span>
              </p>
              <Link to="mailto:zainulebadd@gmail.com" className={styles.link}>Email</Link>
            </div>
          
      </div>
      <div className={styles.lower_footer}>
        <div className="row">
          <div className="col-md-12">
            <p>
              © 2020 Layali Mode. Alle rechten voorbehoud. Design Touch Creation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
