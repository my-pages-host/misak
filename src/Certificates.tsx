/* eslint-disable */
import React from "react";

export const Certificates: React.FC = () => {
  const colCardStyle = 'col-12 col-lg-6';

  return (
    <section className="site-section" id="services-section">
      <div className="container">
        <h2 className="section-title text-center mb-5">Certifikace</h2>
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
          <div className={colCardStyle}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Agile Safe – Product owner</h4>
                <p className="card-text">
                  Product owner je člen agilního týmu. Vlastní týmový backlog, definuje cíle sprintu a prioritizuje požadavky pro vývoj.
                </p>
              </div>
            </div>
          </div>
          <div className={colCardStyle}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Certifikace individuálního kouče</h4>
                <p className="card-text">
                  Associate Certified Coach (ACC) a Mezinárodní asociací koučů (ICF) jsou celosvětově uznávaným standardem při
                  prokazování vysokého zájmu o osobnostní a profesní rozvoj s důrazem na etiku.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
