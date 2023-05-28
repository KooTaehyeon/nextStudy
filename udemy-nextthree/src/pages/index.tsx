import Head from 'next/head';

import fs from 'fs/promises';
import path from 'path';
import { Key } from 'react';
import Link from 'next/link';

export default function Home(props: any) {
  const { products } = props;
  console.log(products);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ul>
        {products.map((item: { id: Key; title: string }) => {
          return (
            <li key={item.id}>
              <Link href={`/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export const getStaticProps = async () => {
  console.log('revalidate');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData: any = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);
  if (!data) {
    return {
      redirect: {
        destinationL: '/no-data',
      },
    };
  }

  if (data.pproducts?.lenght === 0) {
    return { notFound: true };
  }
  return {
    props: {
      products: data.products,
    },
    revalidate: 10, // 리다리렉트
  };
};
