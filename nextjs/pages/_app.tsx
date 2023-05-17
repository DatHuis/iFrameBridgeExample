import { AppProps } from "next/app";
import Script from "next/script";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
    <Component {...pageProps} />
    <Script id="iframeBridge" strategy="beforeInteractive">
      {`
(function (d, a, t, h, u, i, s) { d["DatHuisObject"] = u; d[u] = d[u] || function () { (d[u].q = d[u].q || []).push(arguments) }; d[u].l = 1 * new Date; se = a.createElement(t); fs = a.getElementsByTagName(t)[0]; se["async"] = 1; se.src = h; fs.parentNode.insertBefore(se, fs) })(window, document, "script", "https://btstrp.dathuis.nl/assets/iframeBridge.min.js", "iFrameBridge");
iFrameBridge('init');
      `}
    </Script>
    </>
  );
};

export default App;
