import { get } from 'http';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const LastSalesPage = (props: { sales: {} }) => {
  const [sales, setSales] = useState([props.sales]);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    `https://udemy-next-bbd80-default-rtdb.firebaseio.com/sales.json`,
    fetcher
  );
  console.log(data, error);
  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          user: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);
  // useEffect(() => {
  //   fetch(
  //     `https://udemy-next-bbd80-default-rtdb.firebaseio.com/sales.json`
  //   ).then((res) => {
  //     console.log(res, 'res');
  //     res.json().then((data) => {
  //       console.log(data, 'data');
  //       const transformedSales = [];
  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           user: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }
  //       setSales(transformedSales);
  //       setIsLoading(true);
  //     });
  //   });
  // }, []);
  console.log(sales);
  if (error) {
    return <div> no Data</div>;
  }
  if (!data && !sales) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {sales.map((item: any) => {
        return (
          <li key={item.id}>
            {item.user}-${item.volume}
          </li>
        );
      })}
    </ul>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    `https://udemy-next-bbd80-default-rtdb.firebaseio.com/sales.json`
  );
  const data = await response.json();
  const transformedSales = [];
  for (const key in data) {
    transformedSales.push({
      id: key,
      user: data[key].username,
      volume: data[key].volume,
    });
  }
  return {
    props: { sales: transformedSales },
    // revalidate: 10
  };
};

export default LastSalesPage;
