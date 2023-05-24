import React from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../../\bdummy';
import EventSummary from '../../components/events/event-detail/event-summary';
import EventLogistics from '@/components/events/event-detail/event-logistics';
import EventContent from '@/components/events/event-detail/event-content';
import ErrorAlert from '@/components/ui/error-alert';
const EventDetailPage = () => {
  const router = useRouter();
  console.log('event', router);
  const eventId = router.query.id;
  console.log('eventId', typeof eventId);
  const event = getEventById(eventId as string);
  console.log(event, 'eventdes');

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

export default EventDetailPage;
