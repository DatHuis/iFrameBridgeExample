import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DatHuis Partner App Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          DatHuis Partner App Demo
        </h1>

        <p className={styles.description}>
          This page serves as demo and documentation on how to integrate with the <code>iFrameBridge</code> SDK.<br />
          On this page you can open the Developer Console and play around with the API. (F12)
        </p>


        <h2>Loading the script</h2>
        <code style={{maxWidth: '800px', width: '100%', margin: '0 auto', whiteSpace: 'break-spaces'}}>
          {
            `
<script>
  (function (d, a, t, h, u, i, s) { d["DatHuisObject"] = u; d[u] = d[u] || function () { (d[u].q = d[u].q || []).push(arguments) }; d[u].l = 1 * new Date; se = a.createElement(t); fs = a.getElementsByTagName(t)[0]; se["async"] = 1; se.src = h; fs.parentNode.insertBefore(se, fs) })(window, document, "script", "https://btstrp.dathuis.nl/assets/iframeBridge.min.js", "iFrameBridge");
   
  // Defining onConsent callback to receive the consent object
    iFrameBridge.onConsent = (args) => {
      // Set received consent args to the variable of your choice
      window.__DH_CC_CONSENT_PARAMS = args;
    };

  iFrameBridge('init');
</script>
            `
          }
        </code>
      <h3>Consent object is:</h3>
      <code style={{maxWidth: '800px', width: '100%', margin: '0 auto', whiteSpace: 'break-spaces'}}>
      {`
      {
        "ad_storage": 'granted' | 'denied',
        "ad_user_data": 'granted' | 'denied',
        "ad_personalization": 'granted' | 'denied',
        "analytics_storage": 'granted' | 'denied'
      }
      `}
    </code>
    <br />
        <h2>Now the <code>iFrameBridge</code> space should be available</h2>
        <p>
          Try:
          <code>{`
iFrameBridge('track', { name: 'test_event' });
`}</code>
        </p>
        <p>
          When you want to flag the event as a conversion event:
        </p>
        <code>{`
iFrameBridge('track', { name: 'test_event', conversion: true });
          `}</code>

        <div className={styles.grid}>
          <a
            href="https://public.app.shortcut.com/c8/dathuis/docs/33RBcGPPppKKR29v90XsL7/testing-public-docs"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about iFrameBridge features and API.</p>
          </a>

          <a
            href="https://github.com/DatHuis/iFrameBridgeExample"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover different kinds of examples including Next.js and plain HTML</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://dathuis.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created with ❤️ by{' '}
          <img src="/logo.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
