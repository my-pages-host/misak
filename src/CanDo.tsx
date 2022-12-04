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

                <p>Hledám společnost (projekt) s ambiciózním a dobře komunikovaným business záměrem,
                  silným lídrem v
                  čele a přátelským kolektivem. Když se to všechno takto sejde, mé pracovní
                  odhodlání je velmi
                  intenzivní a vytrvalé.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
                <div className="pt-5">
                  <img
                    src="misa-2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-4 order-2 order-lg-1">
                <p><strong>Role v týmu</strong></p>
                <p><strong>Řešitel komplexních problémů</strong>, kde je mnoho složitých souvislostí.
                </p>
                <p><strong>Konstruktivní typ</strong> se silnou touhou vylepšovat dosavadní
                  koncepty, které jsou
                  logicky děravé nebo časově neefektivní.</p>
                <p><strong>Analytický typ</strong>, který rád sází na dobře promyšlenou strategii.
                </p>
                <p><strong>Orientovaný na týmovou soudržnost</strong> a uctivé mezilidské vztahy.
                </p>
              </div>
              <div className="col-lg-4 order-3 order-lg-3">
                <p><strong>Vedoucí styl</strong></p>
                <p><strong>Důraz na pochopení kritických milníků k naplnění ROI</strong> pro jejich
                  dodání ve stanoveném čase, kvalitě a rozsahu.</p>
                <p><strong>Podporující otevřený dialog</strong> napříč týmem, kde se cení
                  konstruktivní debata, odlišné názory a inovativní nápady. </p>
                <p><strong>Za všech okolností poctiví ve svých úmyslech</strong> a jednání vůči
                  lidem i organizaci.
                </p>
                <p><strong>Dobíječ pozitivního odhodlání</strong> s chutí vydržet nezbytné pracovní
                  vypětí, dokud není
                  dosaženo stanoveného výsledku.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
