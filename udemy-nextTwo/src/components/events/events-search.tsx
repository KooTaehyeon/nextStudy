import Reactm, { useRef } from 'react';
import Button from '../ui/button';
import calasses from '../../styles/events-search.module.css';

const EventsSearch = (props: {
  onSearch(
    year: string | number | undefined,
    month: string | number | undefined
  ): void;
}) => {
  const YearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedYear = YearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;
    console.log(selectedYear, selectedMonth, 'ref');

    props.onSearch(selectedYear, selectedMonth);
  };
  return (
    <form className={calasses.form} onSubmit={submitHandler}>
      <div className={calasses.controls}>
        <div className={calasses.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={YearInputRef}>
            <option value={'2021'}>2021</option>
            <option value={'2022'}>2022</option>
            <option value={'2023'}>2023</option>
          </select>
        </div>

        <div className={calasses.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={monthInputRef}>
            <option value={'1'}>1월</option>
            <option value={'2'}>2월</option>
            <option value={'3'}>3월</option>
            <option value={'4'}>4월</option>
            <option value={'5'}>5월</option>
            <option value={'6'}>6월</option>
            <option value={'7'}>7월</option>
            <option value={'8'}>8월</option>
            <option value={'9'}>9월</option>
            <option value={'10'}>10월</option>
            <option value={'11'}>11월</option>
            <option value={'12'}>12월</option>
          </select>
        </div>
      </div>
      <Button>제출</Button>
    </form>
  );
};

export default EventsSearch;
