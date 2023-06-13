import React from 'react';
import Head from 'next/head';
import EventList from '@/components/events/event-list';
import { getFeaturedEvents } from '@/helpers/api-util';
import NewsletterRegistration from '@/components/input/newsletter-registration';
const HomePage = (props: { events: [] }) => {
  return (
    <>
      <Head>
        <title>Next!!</title>
        <meta
          name='description'
          content='Find a lot of great events that allow you to evolve...'
        />
      </Head>
      <NewsletterRegistration />
      <div>
        <EventList items={props.events} />
      </div>
    </>
  );
};
export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
};

export default HomePage;
