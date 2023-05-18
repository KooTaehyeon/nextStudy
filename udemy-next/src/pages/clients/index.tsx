import Link from 'next/link';
import React from 'react';

const ClientPage = () => {
  const clients = [
    { id: 'xog', name: '구태현' },
    { id: 'manu', name: '메뉴' },
  ];

  return (
    <div>
      <h1>ClientPage</h1>
      <ul>
        {clients.map((item) => (
          <li key={item.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: item.id },
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
