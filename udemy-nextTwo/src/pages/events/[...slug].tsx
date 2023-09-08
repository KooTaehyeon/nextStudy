import React, { SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '@/helpers/api-util';
import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/events/results-title';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/error-alert';
import useSWR from 'swr';
import Head from 'next/head';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const FilteredEventPage = () =>
  //   props: {
  //   hasError: boolean;
  //   events: any;
  //   date: {
  //     year: number;
  //     month: number;
  //   };
  // }
  {
    const { data, error } = useSWR(
      'https://udemy-next-bbd80-default-rtdb.firebaseio.com/events.json',
      fetcher
    );
    let pageHeadData = (
      <Head>
        <title>{'Filter Events'}</title>
        <meta name='description' content={`A list of filtered Events`} />
      </Head>
    );

    const [events, setEvents] = useState<any[]>([]);
    const router = useRouter();
    const filterData: any = router.query.slug;

    useEffect(() => {
      if (data) {
        const event: any = [];

        for (const key in data) {
          event.push({
            id: key,
            ...data[key],
          });
        }
        setEvents(event);
      }
    }, [data]);
    if (!events) {
      return <p className='conter'>Loading...</p>;
    }

    // const filteredYear = filterData[0];
    // const filteredMonth = filterData[1];

    const numYear = filterData;
    const numMonth = filterData;

    pageHeadData = (
      <Head>
        <title>{'Filter Events'}</title>
        {/* <meta
          name='description'
          content={`All Events for ${numMonth[1]}/${numYear[0]}`}
        /> */}
      </Head>
    );

    const filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === numYear &&
        eventDate.getMonth() === numMonth - 1
      );
    });
    if (
      isNaN(numYear) ||
      isNaN(numMonth) ||
      numYear > 2030 ||
      numMonth < 1 ||
      numMonth > 12 ||
      error
    ) {
      return (
        <>
          {pageHeadData}
          <ErrorAlert>
            <p>유효하지않는 필터값 입니다 유효한값을 넣어주세요</p>
          </ErrorAlert>
          <div className='center'>
            <Button link={'/events'}>Show ALL Events</Button>
          </div>
        </>
      );
    }
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
      <>
        {pageHeadData}
        <div>
          <ResultsTitle date={date} />
          <EventList items={filteredEvents} />
        </div>
      </>
    );
  };

// export const getServerSideProps = async (context: { params: any }) => {
//   const { params } = context;

//   const filterData = params.slug;

//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props: {
//         hasError: true,
//         // notFound: true,
//         // redirect: {
//         //   destination: '/error',
//         // },
//       },
//     };
//   }
//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       events: filteredEvents,
//       date: {
//         year: numYear,
//         month: numMonth,
//       },
//     },
//   };
// };

export default FilteredEventPage;
