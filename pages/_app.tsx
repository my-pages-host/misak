// import 'bootstrap/scss/bootstrap.scss'
import '../styles/bootstrap.scss'
import "../styles/globals.css";
import "../styles/font-face.css";
import "../styles/styles.scss";
import "../styles/old.scss";
import Script from "next/script";

const MyApp = ({ Component, pageProps }) =>
  <>
    <Script id="vh">
      {`let vh = window.innerHeight * 0.01;`}
      {"document.documentElement.style.setProperty('--vh', `${vh}px`);"}
    </Script>
    <Component {... pageProps} />
  </>;

export default MyApp;
