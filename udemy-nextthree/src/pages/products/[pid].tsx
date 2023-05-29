import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import { log } from 'console';
const DetailPage = (props: {
  loadedProduct: { id: string; title: string; description: string };
}) => {
  const { loadedProduct } = props;
  if (!loadedProduct) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <h1>{loadedProduct.title || ''}</h1>
      <p>{loadedProduct.description || ''}</p>
    </div>
  );
};
export const getData = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData: any = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
};
// { params: any }
export const getStaticProps = async (context: any) => {
  console.log('re-predering');

  const { params } = context;
  const productId = params.pid;
  // const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  // const jsonData: any = await fs.readFile(filePath);
  const data = await getData();
  const product = data.products.find(
    (product: { id: string }) => product.id === productId
  );
  if (!product) {
    return { notFound: true };
  }
  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getData();
  const ids = data.products.map((product: { id: string }) => product.id);
  const pathsWithParams = ids.map((id: string) => ({ params: { pid: id } }));
  console.log('', pathsWithParams);
  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

export default DetailPage;
