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
    <Script id="hotjar">
      {`(
      function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3282913,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
        }
        )(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}
    </Script>
    <Component {... pageProps} />
  </>;

export default MyApp;
