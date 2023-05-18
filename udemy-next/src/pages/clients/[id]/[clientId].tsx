import { useRouter } from 'next/router';
import React from 'react';

const ClientId = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>ClientId Page id</h1>
      <h1>{router.query.id}</h1>
      <h1>{router.query.clientId}</h1>
    </div>
  );
};

export default ClientId;
