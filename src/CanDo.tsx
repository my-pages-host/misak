/* eslint-disable */
import React from "react";
import styles from "./CanDo.module.scss";
import clsx from "clsx";

export const CanDo: React.FC = () => {
  const colStyle = 'col-12 col-lg-8 col-xl-7 col-xxl-6';
  return (
    <>
      <section>
        <div className="site-section" id="services-section">
          <div className="container">
            <h2 className="section-title highlighted-title text-center">Co pro Váš byznys můžu udělat</h2>
            <div className="row justify-content-center mb-5">
              <div className={clsx(colStyle)}>
                <p className="text-justify">
                  S velkým nadšením vložím své schopnosti, dovednosti a znalosti do služeb projektů,
                  které vyvíjejí technologii s cílem zefektivnit proces,
                  zrychlit průchodnost, zkrátit čas čekání s cílem maximalizovat CEX & ROI.
                </p>
                <h3 className="fs-6">Komplexní dodávka vyžadující multitasking</h3>
                <p className="text-justify">
                  Miluji práci na komplexním projektu, kde je potřeba udržet přehled Top-Down.
                  Takové příležitosti vyhledávám, protože mě baví vymýšlet koncepty úplně nové nebo
                  zefektivnit stávající a potřebné změny rovnou implementovat v praxi,
                  včetně následného vyškolení nových vlastníků, roadmapy akčních kroků pro dlouhodobou udržitelnost.
                </p>
                <h3 className="fs-4">Ucházím se o pozici</h3>
                <ul>
                  <li>Solution architect</li>
                  <li>Facilitator</li>
                  <li>Process manager OPEX (Process Excellence)</li>
                </ul>

                <p className="text-justify">
                  Hledám společnost (projekt) s ambiciózním business záměrem,
                  silným lídrem v čele a proaktivním týmem, který má proklientský způsob myšlení.
                </p>
              </div>
            </div>
            <div className="row mb-4 justify-content-center">
              <div className={clsx(colStyle)}>
                <h3 className="fs-6">Konkrétní činnosti za které ráda příjmu odpovědnost</h3>
                <ul className={styles.list}>
                  <li>Rozpracování vize programu do vize produktů/procesů</li>
                  <li>Sestavení metrik pro každý produkt/proces</li>
                  <li>Průběžná tvorba reportů/kvartální plánování</li>
                  <li>Sběr VOC (voice of customer) a sestavení potřebných metrik</li>
                  <li>Nastavení standardů dokumentace (procesní mapování, RACI)</li>
                  <li>Tvorba procesní architektury</li>
                  <li>Facilitace warkshopů s cílem doručit potřebná řešení</li>
                  <li>Řízení přípravy PoC (Proof of Concept)</li>
                  <li>Řízení a realizace marketingové strategie STDC</li>
                  <li>Vyškolení vlastníků procesu</li>
                  <li>Dlouhodobé sledování NPS produktu/procesu z pohledu zákazníka</li>
                  <li>Digitalize procesů</li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className={clsx(colStyle, "justify-content-center")}>
                <h3 className="fs-6">Co k tomu potřebuji</h3>
                <ul className={styles.list}>
                  <li>Představit vizi</li>
                  <li>Vyjasnit kritická KPI</li>
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
