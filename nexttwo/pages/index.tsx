import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { counterStore, newCounterSrore } from '@/store';
import { counterSile } from '@/store/counterSlice';
import { asyncUpFetch, newCounterSlice } from '@/store/newCounterSlice';

const inter = Inter({ subsets: ['latin'] });

// const reducer = (state: any, action: any) => {
//   if (action.type === 'up')
//     return { ...state, value: state.value + action.step };
//   return state;
// };

// const initiaState = { value: 0 };
// const store = createStore(reducer, initiaState);

// const Counter = () => {
//   const dispatch = useDispatch();
//   const count = useSelector((state: { counter: { value: number } }) => {
//     return state.counter.value;
//   });
//   return (
//     <>
//       <button
//         onClick={() => {
//           // dispatch({ type: 'counter/up', step: 2 });
//           dispatch(counterSile.actions.up(2));
//         }}
//       >
//         up
//       </button>
//       {count}
//       <button
//         onClick={() => {
//           // dispatch({ type: 'counter/up', step: 2 });
//           dispatch(counterSile.actions.down(1));
//         }}
//       >
//         down
//       </button>
//     </>
//   );
// };
const NewCounter = () => {
  const dispatch = useDispatch<any>();
  const counts = useSelector((state: { counter: { value: number } }) => {
    return state.counter.value;
  });
  const status = useSelector((state: { counter: { status: string } }) => {
    return state.counter.status;
  });

  return (
    <>
      <button
        onClick={() => {
          // dispatch({ type: 'counter/up', step: 2 });
          dispatch(newCounterSlice.actions.up(2));
        }}
      >
        up
      </button>
      <button
        onClick={() => {
          dispatch(asyncUpFetch());
        }}
      >
        + async thunk
      </button>
      <div>
        {' '}
        {counts} |{status}
      </div>
    </>
  );
};

export default function Home() {
  return (
    // <Provider store={counterStore}>
    <Provider store={newCounterSrore}>
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
          <li>
            <Link href={'/sub/fetch'}> /page/sub/fetch.js</Link>
          </li>
        </ul>
        {/* <Counter /> */}
        <hr></hr>
        <NewCounter />
      </div>
    </Provider>
    // </Provider>
  );
}
