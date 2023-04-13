import { ReactChild } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type User = {
  name: string | number | null;
};

const Fetch = () => {
  const [user, setUser] = useState<User>({ name: null });
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/hello')
      .then((type) => type.json())
      .then((result) => setUser(result));
  }, []);

  return (
    <div>
      <h1>/pages/sub/fetch.js</h1>
      <p>{user.name}</p>
      <Link href={'/'}>.pages/index.js</Link>
    </div>
  );
};

export default Fetch;
