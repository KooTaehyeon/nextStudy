import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../../\bdummy';
import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/events/results-title';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/error-alert';
const FilteredEventPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(filterData, 'filterData');
  if (!filterData) {
    return <p className='conter'>Loading...</p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>유효하지않는 필터값 입니다 유효한값을 넣어주세요</p>
        </ErrorAlert>
        <div className='center'>
          <Button link={'/events'}>Show ALL Events</Button>
        </div>
      </>
    );
  }
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>입력한 필터에 이벤트가 없습니다</p>
        </ErrorAlert>
        <div className='center'>
          <Button link={'/events'}>Show ALL Events</Button>
        </div>
      </>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEventPage;
