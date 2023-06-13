import React from 'react';
import { useRouter } from 'next/router';
import {
  getEventById,
  getAllEvents,
  getFeaturedEvents,
} from '@/helpers/api-util';
import EventSummary from '../../components/events/event-detail/event-summary';
import EventLogistics from '@/components/events/event-detail/event-logistics';
import EventContent from '@/components/events/event-detail/event-content';
import ErrorAlert from '@/components/ui/error-alert';
import Head from 'next/head';
import Comments from '@/components/input/comments';
const EventDetailPage = (props: {
  selectedEvent: {
    id: string;
    title: string;
    date: string;
    image: string;
    loctation: string;
    description: string;
  };
}) => {
  const event = props.selectedEvent;

  // console.log('eventId', typeof eventId);
  // const event = getEventById(eventId as string);
  // console.log(event, 'eventdes');

  if (!event) {
    return (
      <>
        <div className='center'>
          <p>loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name='description' content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.loctation}
        image={event.image}
        imageAlt={'사진'}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </>
  );
};

export const getStaticProps = async (context: any) => {
  const eventId = context.params.id;

  const event = await getEventById(eventId);
  console.log('재요청');

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
};
export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map((item) => ({ params: { id: item.id } }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export default EventDetailPage;
