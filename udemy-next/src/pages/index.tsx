import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

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
      </div>
    </>
  );
}
