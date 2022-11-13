import styles from "./Call.module.scss";
import clsx from "clsx";
import React from "react";

export const Call = () => {
  return <section>
    <div className={clsx(styles.container)} id="call-section">
      <div className="container">
        <div className="row ">
          <div className="col-12 mb-5 position-relative">
            <h2 className={clsx(styles.title, "text-center", "text-white")}>
              Jdeme spolu zvýšit ROI & CEX?
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
};
