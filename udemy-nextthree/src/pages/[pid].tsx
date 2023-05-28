import React from 'react';
import fs from 'fs/promises';
import path from 'path';
const DetailPage = (props: {
  loadeProduct: { id: string; title: string; description: string };
}) => {
  const { loadeProduct } = props;
  console.log(loadeProduct);

  return (
    <div>
      <h1>{loadeProduct.title}</h1>
      <p>{loadeProduct.description}</p>
    </div>
  );
};

export const getStaticProps = async (context: { params: any }) => {
  const { params } = context;
  const productId = params.pid;
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData: any = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const product = data.products.find(
    (product: any) => product.id === productId
  );
  return {
    props: {
      loadedProduct: product,
    },
  };
};

export default DetailPage;
