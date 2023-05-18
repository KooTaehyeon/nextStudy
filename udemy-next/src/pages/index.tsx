import Head from 'next/head';

import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>U-demy Next App</title>
        <meta name='description' content='U-demy 학습' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <h1>The Home Page</h1>
        <ul>
          <li>
            <Link href={'portfolio'}>portfolio</Link>
          </li>
          <li>
            <Link href={'clients'}>Client</Link>
          </li>
          <li>
            <Link href={'about'}>about</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
