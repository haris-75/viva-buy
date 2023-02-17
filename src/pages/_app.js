import WebApp from '../layout/WebApp';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <WebApp>
        <Component {...pageProps} />
      </WebApp>
    </div>
  );
}

export default MyApp;
