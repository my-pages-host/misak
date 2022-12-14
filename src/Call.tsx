import styles from "./Call.module.scss";
import clsx from "clsx";
import React from "react";

export const Call = () => {
  return <section>
    <div className={clsx(styles.container)} id="call-section">
      <div className="container">
        <div className="row ">
          <div className="col-12 mb-5 position-relative d-flex justify-content-center">
            <h2 className={clsx(styles.title, "text-white")}>
              Jdeme spolu zvýšit ROI&nbsp;&&nbsp;CEX?
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
};
