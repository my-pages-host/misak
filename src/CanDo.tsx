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
                <h3 className="fw-bold">Co pro Váš byznys můžu udělat</h3>
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
            <div className="row" style={{ gap: '1.5rem 0' }}>
              <div className={colCardStyle}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Lean Six Sigma Green Belt</h4>
                    <p className="card-text">
                      Procesní zlepšování stávajících procesů z pohledu plýtvání zdrojů
                      a odstranění nežádoucích defektů procesu z poholedu zákazníka.
                    </p>
                  </div>
                </div>
              </div>
              <div className={colCardStyle}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">DFSS - Design nových procesů</h4>
                    <p className="card-text">
                      Tvorba nových konceptů s cílem najít úplně nový potenciál nebo řešení pro existující gapy
                      stávajícího procesu.
                    </p>
                  </div>
                </div>
              </div>
              <div className={colCardStyle}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Business Process Management</h4>
                    <p className="card-text">
                      Principy zavádění procesního řízení tak, aby bylo efektivní, udržitelné a zvýšila se kvalita
                      směrem
                      k zákazníkovi.
                    </p>
                  </div>
                </div>
              </div>
              <div className={colCardStyle}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Finanční řízení projektu</h4>
                    <p className="card-text">
                      Sestavení finančního plánu projektu. Řízení finančních toků v průběhu času. Reporting pro
                      management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
