import React from "react";

export const AmI: React.FC = () => {
  return (
    <>
      <section>
        <div className="site-section" id="services-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
                <div className="pt-5">
                  <img
                    src="misa-2.webp"
                    alt="Image"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-lg-4 order-2 order-lg-1">
                <h3>Role v týmu</h3>
                <p><strong>Konstruktivní typ</strong> se silnou touhou vylepšovat dosavadní
                  koncepty, které jsou
                  logicky děravé nebo časově neefektivní.</p>
                <p><strong>Analytický typ</strong>, který rád sází na dobře promyšlenou strategii.</p>
                <p><strong>Řešitel komplexních problémů</strong>.</p>
                <p>
                  <strong>Orientovaná na týmovou soudržnost</strong>.
                  Velmi dobře se mi pracuje v týmu, který má dynamické tempo,
                  prozákaznický způsob myšlení a organizovaný přístup k práci.
                </p>
              </div>
              <div className="col-lg-4 order-3 order-lg-3">
                <h3>Můj manažerský styl</h3>
                <p><strong>Důraz na pochopení kritických milníků k naplnění ROI</strong> pro jejich
                  dodání ve stanoveném čase, kvalitě a rozsahu.</p>
                <p><strong>Podporující otevřený dialog</strong> napříč týmem, kde se cení
                  konstruktivní debata, odlišné názory a inovativní nápady. </p>
                <p><strong>Za všech okolností poctivý ve svých úmyslech</strong> a jednání vůči lidem i organizaci.</p>
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
