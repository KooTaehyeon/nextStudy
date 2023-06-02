import React from 'react';
import { useRouter } from 'next/router';
import { getEventById, getAllEvents } from '@/helpers/api-util';
import EventSummary from '../../components/events/event-detail/event-summary';
import EventLogistics from '@/components/events/event-detail/event-logistics';
import EventContent from '@/components/events/event-detail/event-content';
import ErrorAlert from '@/components/ui/error-alert';
const EventDetailPage = (props: {
  selectedEvent: {
    title: string;
    date: string;
    image: string;
    loctation: string;
    description: string;
  };
}) => {
  const event = props.selectedEvent;
  console.log(props);

  // console.log('eventId', typeof eventId);
  // const event = getEventById(eventId as string);
  // console.log(event, 'eventdes');

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>no event found!</p>
        </ErrorAlert>
      </>
    );
  }
  return (
    <>
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
    </>
  );
};

export const getStaticProps = async (context: any) => {
  const eventId = context.params.id;
  console.log(eventId, 'p');

  const event = await getEventById(eventId);
  console.log(event, 'eeeeeeee');

  return {
    props: {
      selectedEvent: event,
    },
  };
};
export const getStaticPaths = async () => {
  const events = await getAllEvents();

  const paths = events.map((item) => ({ params: { id: item.id } }));
  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export default EventDetailPage;
