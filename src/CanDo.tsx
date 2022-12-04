/* eslint-disable */
import React from "react";

export const CanDo: React.FC = () => {
  const colCardStyle = 'col-12 col-lg-6';
  return (
    <>
      <section>
        <div className="site-section" id="services-section">
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 col-xl-7 col-xxl-6 mb-5 position-relative">
                <h2 className="section-title">Co pro Váš byznys můžu udělat</h2>
                <p>
                  S velkým nadšením bych ráda vložila své schopnosti, dovednosti a znalosti do služeb projektů,
                  které vyvíjejí technologii s cílem plně automatizovat lidské procesy a zefektivnit,
                  operativně koordinovat nebo monitorovat koncovou kvalitu a bezpečnost.
                </p>
                <p>
                  A také do projektů, kde je zapotřebí vymýšlet koncepty úplně nové nebo zefektivnit
                  ty stávající a potřebné změny rovnou implementovat v praxi, včetně následného monitoringu
                  a identifikace dalších klíčových úprav s ohledem na výsledné metriky.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
