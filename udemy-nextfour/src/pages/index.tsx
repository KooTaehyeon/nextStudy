import { Inter } from 'next/font/google';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // const [data, setData] = useState([]);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const feedBackInputRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const submutFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current?.value;
    const enteredfeedBack = feedBackInputRef.current?.value;
    const reqBody = {
      email: enteredEmail,
      text: enteredfeedBack,
    };

    axios.post('api/feedback', reqBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const loadFeedback = async () => {
    router.push('/feedback');
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
        <hr />
        <button onClick={loadFeedback}>load Feedback</button>
        {/* <ul>
          {data.map((item: { id: string; email: string; text: string }) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
}
