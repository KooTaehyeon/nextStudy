import App from 'next/app';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
