import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Id = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div>
      <h1>/pages/sub/[{id}].js</h1>
      <p>Parameter id: {id}</p>
      <Link href={'/'}>.pages/index.js</Link>
    </div>
  );
};

export default Id;
