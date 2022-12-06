import React from "react";
import styles from "./Footer.module.scss";
import clsx from "clsx";

export const Footer: React.FC = () => (
  <>
    <footer className="site-section bg-light footer">
      <div className={clsx('container', styles.container)}>
        <div className="row">
          <div className="col-12 col-md-6">
            <h3 className="footer-title">Working area</h3>
            <p><span className="d-inline-block d-md-block">Prague, Czech Republic</span></p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="footer-title">Let&apos;s chat on</h3>
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
