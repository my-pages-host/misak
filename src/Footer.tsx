import React from "react";
import styles from "./Footer.module.scss";
import clsx from "clsx";

export const Footer: React.FC = () => (
  <>
    <footer className="site-section bg-light footer">
      <div className={clsx('container', styles.container)}>
        <div className="row">
          <div className="col-12 col-md-6">
            <p>Praha, CZ + remote</p>
            <p>Forma spolupráce IČO / HPP</p>
            <p>Start Q1 2023</p>
            <p>CZ / ENG</p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="footer-title">Kontakt</h3>
            <p>
              <span className="d-inline-block d-md-block">
                <a href="tel:+420730102484">+420 730 102 484</a>
              </span>
            </p>
            <p>
              <span className="d-inline-block d-md-block">
                <a href="mailto:podlipska.misa@gmail.com">podlipska.misa@gmail.com</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
);
