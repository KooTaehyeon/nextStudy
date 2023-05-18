import { useRouter } from 'next/router';
import React from 'react';

const ClientPage = () => {
  const routor = useRouter();
  const loadProjectHandle = () => {
    // load data...
    routor.push({
      pathname: '/clients/[id]/[clientId]',
      query: { id: 'xog', clientId: '구태현' },
    });
  };

  return (
    <div>
      <h1>ClientPage!</h1>
      <button onClick={loadProjectHandle}>Load Project A</button>
    </div>
  );
};

export default ClientPage;
