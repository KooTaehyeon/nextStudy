import React from 'react';
import { getAllEvents } from '@/helpers/api-util';
import EventList from '@/components/events/event-list';
import EventSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';
import Head from 'next/head';
const EventPage = (props: { events: [] }) => {
  const { events } = props;

  const router = useRouter();
  const findEventsHandler = (year: number | string, month: number | string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name='description'
          content='Find a lot of great events that allow you to evolve...'
          key={'description'}
        />
      </Head>

      <div>
        <EventSearch onSearch={findEventsHandler} />
        <EventList items={events} />;
      </div>
    </>
  );
};

export default EventPage;

export const getStaticProps = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
};
