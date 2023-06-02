import React from 'react';

import EventList from '@/components/events/event-list';
import { getFeaturedEvents } from '@/helpers/api-util';
const HomePage = (props: { events: [] }) => {
  console.log(props);

  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
};
export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
};

export default HomePage;
