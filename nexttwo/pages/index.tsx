import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <h1>/pages/index.js</h1>
      <ul>
        <li>
          <Link href={'/sub'}> /page/sub/index.js</Link>
        </li>
        <li>
          <Link href={'/sub/about'}> /page/sub/about.js</Link>
        </li>
        <li>
          <Link href={'/sub/1'}> /page/sub/[id].js</Link>
        </li>
        <li>
          <Link href={'/sub/2'}> /page/sub/[id].js</Link>
        </li>
      </ul>
    </div>
  );
}
