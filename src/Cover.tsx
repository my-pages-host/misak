import styles from "./Cover.module.scss";
import clsx from "clsx";

export const Cover = () => <div className={clsx(styles.container, "site-blocks-cover")} id="home-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12 mt-lg-5 text-left align-self-end align-self-lg-center text-intro">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="text-black">Michaela Podlipská</h1>
            <p className="lead">Každý pracovní den chci zakončit s pocitem, že se zvýšila spokojenost zákazníka skrze přidanou hodnotu mojí práce.</p>
            <p className="d-none d-md-block">
              <a href="#services-section" className="btn smoothscroll btn-primary btn-lg">Co pro Váš byznys můžu udělat</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
