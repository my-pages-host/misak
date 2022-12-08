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
            <h2 className="section-title highlighted-title">Co pro Váš byznys můžu udělat</h2>
            <div className="row">
              <div className="col-12 col-lg-8 col-xl-7 col-xxl-6 mb-5">
                <p className="text-justify">
                  Hledám společnost (projekt) s ambiciózním business záměrem,
                  silným lídrem v čele a proaktivním týmem, který má proklientský způsob myšlení.
                </p>

                <strong>Digitalizace procesu</strong>
                <p className="text-justify">
                  S velkým nadšením vložím své schopnosti, dovednosti a znalosti do služeb projektů,
                  které vyvíjejí technologii s cílem zefektivnit proces,
                  zrychlit průchodnost, zkrátit čas čekání s cílem maximalizovat CEX & ROI.
                </p>
                <strong>Komplexní dodávka vyžadující multitasking</strong>
                <p className="text-justify">
                  Miluji práci na komplexním projektu, kde je potřeba udržet přehled Top-Down.
                  Takové příležitosti vyhledávám, protože mě baví vymýšlet koncepty úplně nové nebo
                  zefektivnit stávající a potřebné změny rovnou implementovat v praxi,
                  včetně následného vyškolení nových vlastníků, roadmapy akčních kroků pro dlouhodobou udržitelnost.
                </p>

              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <strong>Konkrétní činnosti za které ráda příjmu odpovědnost</strong>
                <ul className={styles.list}>
                  <li>Rozpracování vize programu do vize produktů/procesů</li>
                  <li>Sestavení metrik pro každý produkt/proces</li>
                  <li>Průběžná tvorba reportů/kvartální plánování</li>
                  <li>Sběr VOC (voice of customer) a sestavení potřebných metrik</li>
                  <li>Nastavení standardů dokumentace (procesní mapování, RACI)</li>
                  <li>Tvorba procesní architektury</li>
                  <li>Řízení workshopů pro zákazníky</li>
                  <li>Řízení přípravy PoC (Proof of Concept)</li>
                  <li>Řízení a realizace marketingové strategie STDC</li>
                  <li>Vyškolení vlastníků procesu</li>
                  <li>Dlouhodobé sledování NPS produktu/procesu z pohledu zákazníka</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <strong>Co k tomu potřebuji</strong>
                <ul className={styles.list}>
                  <li>Představit vizi</li>
                  <li>Vyjasnit prvotní nástřel ročních KPI</li>
                  <li>Definovat časový rámec</li>
                  <li>Vyjasnit předpokládaný rozpočet</li>
                  <li>Zajistit potřebné pravomoci</li>
                  <li>Garantovat potřebnou alokaci týmu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
