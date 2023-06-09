import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useRef } from 'react';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const feedBackInputRef = useRef<HTMLTextAreaElement>(null);

  const submutFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current?.value;
    const enteredfeedBack = feedBackInputRef.current?.value;

    // fetch();
  };

  return (
    <>
      <div>
        <h1>the home page</h1>
        <form onSubmit={submutFormHandler}>
          <div>
            <label htmlFor='email'>your email</label>
            <input type='email' id='email' ref={emailInputRef} />
          </div>
          <div>
            <label htmlFor='feedback'>feedback email</label>
            <textarea id='feedback' rows={5} ref={feedBackInputRef} />
          </div>
          <button>Send Feedback</button>
        </form>
      </div>
    </>
  );
}
