/* eslint-disable */
import React from "react";

export const OldHome: React.FC<React.PropsWithChildren> = ({children}) => (
  <>
    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body">
        <ul className="site-nav-wrap">
          <li><a href="#home-section" className="nav-link active">Home</a></li>
          <li><a href="#experience-section" className="nav-link">Experience</a></li>
          <li><a href="#about-section" className="nav-link">About</a></li>
        </ul>
        <ul className="site-nav-wrap">
          <li><a href="#contact-section" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
    <div id="sticky-wrapper" className="sticky-wrapper" style={{ height: "60.8594px" }}>
      <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="">
              <nav className="site-navigation position-relative text-right" role="navigation">
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li><a href="#home-section" className="nav-link active">Home</a>
                  </li>
                  <li><a href="#experience-section" className="nav-link">Experience</a>
                  </li>
                  <li><a href="#about-section" className="nav-link">About Me</a>
                  </li>
                  <li><a href="#contact-section" className="nav-link">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className=" text-center mx-5">
              <h1 className="m-0 site-logo"><a href="#about-section" className="nav-link">Good to know </a></h1>
            </div>
            <div className="d-inline-block d-lg-none" style={{ position: "relative", top: "3px" }}>
              <a
                href="#"
                className="site-menu-toggle js-menu-toggle float-right"><span
                className="icon-menu h3"></span></a>
            </div>
          </div>
        </div>
      </header>
    </div>
    {children}
    <section>
      <div className="site-section" id="services-section">
        <div className="container">
          <div className="row ">
            <div className="col-12 mb-5 position-relative">
              <h3><strong>For your business I can do</strong></h3>
              <p>Zajistit ROI.Zajistit ROI.Zajistit ROI.Zajistit ROI.Zajistit
                ROI................................................................................... </p>
              <p>Zajistit ROI.Zajistit ROI.Zajistit ROI.Zajistit ROI.Zajistit ROI. </p>
              <p>Zajistit ROI.Zajistit ROI.Zajistit ROI.Zajistit ROI.Zajistit ROI. </p>
              <p>Zajistit ROI.Zajistit ROI.Zajistit ROI.Zajistit ROI.Zajistit ROI. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="site-section" id="experience-section">
        <div className="container">
          <div className="row ">
            <div className="col-12 mb-5 position-relative">
              <h2 className="section-title text-center mb-5">Experience</h2>
            </div>
            <div className="col-md-6 mb-4">
              <div className="service d-flex h-100">
                <div className="service-number mr-4"><span className="icon-style"></span></div>
                <div className="service-about">
                  <h3><strong>Business Owner</strong></h3>
                  <p>2015-2020 | Spoluzakladelka & Ředitelka společnosti LidskaSila s.r.o., Expert na
                    služby pro domácnost. </p>
                  <p><strong>Redukce celopodnikových nákladů o 57 % & zvýšení ziskovosti o 32&nbsp;%
                    meziročně (2018 - 2019) </strong></p>

                  <ul>
                    <li>
                      Business process management and measurement z pohledu návratnosti ROI
                    </li>
                    <li>Business process architecture development z pohledu udržitelnosti pravidelného
                      subscription
                    </li>
                    <li>Rozšíření portfólia o vstup sektoru B2B- Airbnb</li>
                    <li>In-house development CRM systému pro řízení online order forms, customer support
                      tickets, accounting documents and capacity of workers&nbsp;etc.
                    </li>
                  </ul>

                  <p><strong>V důsledku toho bylo dosaženo následující:</strong></p>

                  <ul>

                    <li>Zvýšení LTV z 33,33&nbsp;% na <strong>62,50&nbsp;%</strong> meziročně (graf&nbsp;3)
                    </li>
                    <li>Růst opakovatelnosti nákupu předplatitelů z 67,85&nbsp;% na
                      <strong>81,15&nbsp;%</strong> meziročně (graf&nbsp;13)
                    </li>
                    <li>Zvýšení "Average paid order value by year" o <strong>46,15&nbsp;%</strong>
                      meziročně (graf &nbsp;9)
                    </li>
                    <li>
                      Zvýšení "Average hour rate by year" o <strong>60&nbsp;%</strong> meziročně (graf&nbsp;10)
                    </li>
                    <li>Zvýšení "Average duration of customer subscription" o <strong>50&nbsp;%</strong>
                      meročně (graf&nbsp;8)
                    </li>
                    <li>Udržení poměru <strong>90&nbsp;% pravidelných předplatitelů </strong> služby k
                      10&nbsp;% jednorázových objednávek (graf&nbsp;2)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="service d-flex h-100">
                <div className="service-number mr-4"><span className="icon-business_center"></span></div>
                <div className="service-about">
                  <h3><strong>Product owner</strong></h3>
                  <p>2021-now | CETIN a.s., Czech telecommunications company that is part of PPF Group</p>
                  <p><strong>Redukce celopodnikových nákladů o 57 % & zvýšení ziskovosti o 32&nbsp;%
                    meziročně (2018 - 2019) </strong></p>
                  <ul>
                    <li>
                      Business process management and measurement z pohledu návratnosti ROI
                    </li>
                    <li>Business process architecture development z pohledu udržitelnosti pravidelného
                      subscription
                    </li>
                    <li>Rozšíření portfólia o vstup sektoru B2B- Airbnb</li>
                    <li>In-house development CRM systému pro řízení online order forms, customer support
                      tickets, accounting documents and capacity of workers&nbsp;etc.
                    </li>
                  </ul>
                  <p><strong>V důsledku toho bylo dosaženo následující:</strong></p>

                  <ul>

                    <li>Zvýšení LTV z 33,33&nbsp;% na <strong>62,50&nbsp;%</strong> meziročně (graf&nbsp;3)
                    </li>
                    <li>Růst opakovatelnosti nákupu předplatitelů z 67,85&nbsp;% na
                      <strong>81,15&nbsp;%</strong> meziročně (graf&nbsp;13)
                    </li>
                    <li>Zvýšení "Average paid order value by year" o <strong>46,15&nbsp;%</strong>
                      meziročně (graf &nbsp;9)
                    </li>
                    <li>
                      Zvýšení "Average hour rate by year" o <strong>60&nbsp;%</strong> meziročně (graf&nbsp;10)
                    </li>
                    <li>Zvýšení "Average duration of customer subscription" o <strong>50&nbsp;%</strong>
                      meročně (graf&nbsp;8)
                    </li>
                    <li>Udržení poměru <strong>90&nbsp;% pravidelných předplatitelů </strong> služby k
                      10&nbsp;% jednorázových objednávek (graf&nbsp;2)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="site-section" id="about-section">
              <div className="container">
                <div className="row ">
                  <div className="col-12 mb-4 position-relative">
                    <h2 className="section-title">About Me</h2>
                    <p>Hledám společnost (projekt) s ambiciózním a dobře komunikovaným business záměrem,
                      silným lídrem v
                      čele a přátelským kolektivem. Když se to všechno takto sejde, mé pracovní
                      odhodlání je velmi
                      intenzivní a vytrvalé.</p>
                  </div>
                  <div className="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
                    <div className="bg-light pt-5">
                      <img src="misa-2.jpg"
                           alt="Image" className="img-fluid"/>
                    </div>
                  </div>
                  <div className="col-lg-4 order-2 order-lg-1">
                    <p><strong>ROLE V TÝMU</strong></p>
                    <p><strong>Řešitel komplexních prblémů</strong>, kde je mnoho složitých souvislostí.
                    </p>
                    <p><strong>Konstruktivní typ</strong> se silnou touhou vylepšovat dosavadní
                      koncepty, které jsou
                      logicky děravé nebo časově neefektivní.</p>
                    <p><strong>Konektor</strong> s přirozeným citem identifikovat, stimulovat a propojit
                      pracovní
                      potenciál jak mezi jednotlivci, tak i vůči novým příležitostem.</p>
                    <p><strong>Analytický typ</strong>, který rád sází na dobře promyšlenou strategii.
                    </p>
                    <p><strong>Orientovaný na týmovou soudržnost</strong> a uctivé mezilidské vztahy.
                    </p>
                  </div>
                  <div className="col-lg-4 order-3 order-lg-3">
                    <p><strong>VEDOUCÍ STYL (Liberální styl vedení) </strong></p>
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
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="site-section" id="call-section">
        <div className="container alalalala">
          <div className="row ">
            <div className="col-12 mb-5 position-relative">
              <h2 className="section-title">
                Jdeme spolu zvýšit ROI & CEX?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="site-section bg-light footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col col-md-3">
            <h3 className="footer-title">Working area</h3>
            <p><span className="d-inline-block d-md-block">Prague, Czech Republic</span></p>
          </div>
          <div className="col col-md-9">
            <h3 className="footer-title">Let's chat on</h3>
            <p>
              <span className="d-inline-block d-md-block">
                <a href="tel:+420730102484">+420 730 102 484</a>
              </span>
            </p>
            <p>
              <span className="d-inline-block d-md-block">
                <a href="mailto:podlipska.misa@gmail.com">podlipska.misa@gmail.com</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
);
