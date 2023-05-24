import React from 'react';
import { getAllEvents } from '../../../\bdummy';
import EventList from '@/components/events/event-list';
import EventSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';
const EventPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  console.log(events, 'events');
  const findEventsHandler = (year: number | string, month: number | string) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };
  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />;
    </div>
  );
};

export default EventPage;
