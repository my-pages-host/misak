/* eslint-disable */
import React from "react";
import styles from "./CanDo.module.scss";

export const CanDo: React.FC = () => {
  const colCardStyle = 'col-12 col-lg-6';
  return (
    <>
      <section>
        <div className="site-section" id="services-section">
          <div className="container">
            <h2 className="section-title">Co pro Váš byznys můžu udělat</h2>
            <div className="row">
              <div className="col-12 col-lg-8 col-xl-7 col-xxl-6 mb-5">
                <p>Hledám společnost (projekt) s ambiciózním a dobře komunikovaným business záměrem,
                  silným lídrem v
                  čele a přátelským kolektivem. Když se to všechno takto sejde, mé pracovní
                  odhodlání je velmi
                  intenzivní a vytrvalé.</p>

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
            <div className="row mb-5">
              <div className="col">
                <strong>Konkrétní činnosti za které ráda příjmu odpovědnost</strong>
                <ul className={styles.list}>
                  <li>Rozpracování vize programu do vize produktů/procesů</li>
                  <li>Sestavení metrik per produkt/proces</li>
                  <li>Průběžná tvorba reportů/kvartální plánování</li>
                  <li>Sběr VOC (voice of customer) a sestavení potřebných metrik</li>
                  <li>Nastavení standardů dokumentace (Procesní mapování, RACI)</li>
                  <li>Tvorba procesní architektury</li>
                  <li>Řízení workshopů pro zákazníky</li>
                  <li>Řízení přípravy PoC (Proof of Concept)</li>
                  <li>Řízení a realizace marketingové strategie STDC</li>
                  <li>Vyškolení vlastníků procesu</li>
                  <li>Dlouhodobé sledování NPS produktu/procesu z pohledu zákazníka</li>
                </ul>
              </div>
              <div className="col">
                <strong>Vstupy TODO</strong>
                <ul>
                  <li>Představit vizi</li>
                  <li>Vyjasnit prvotní nástřel ročních KPI</li>
                  <li>Definovat časový rámec</li>
                  <li>Vyjasnit předpokládaný rozpočet</li>
                  <li>Zajistit potřebné pravomoci</li>
                  <li>Garantovat potřebnou alokaci týmu</li>
                </ul>
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
                <h3>Role v týmu</h3>
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
                <h3>Vedoucí styl</h3>
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
