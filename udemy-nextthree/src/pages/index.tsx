import Head from 'next/head';

import fs from 'fs/promises';
import path from 'path';
import { Key } from 'react';

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
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData: any = await fs.readFile(filePath);
  console.log('revalidate');

  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
};
