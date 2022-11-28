/* eslint-disable */
import React from "react";
import { CanDo } from "./CanDo";
import { Call } from "./Call";
import { Experience } from "./Experience";
import { AboutMe } from "./AboutMe";
import { Certificates } from "./Certificates";

export const OldHome: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <CanDo/>
    <AboutMe/>
    <Experience/>
    <Certificates/>
    <Call/>
    <footer className="site-section bg-light footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-3">
            <h3 className="footer-title">Working area</h3>
            <p><span className="d-inline-block d-md-block">Prague, Czech Republic</span></p>
          </div>
          <div className="col-12 col-md-9">
            <h3 className="footer-title">Let's chat on</h3>
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
