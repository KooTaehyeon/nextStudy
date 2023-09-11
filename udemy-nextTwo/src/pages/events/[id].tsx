import React, { useEffect } from 'react';
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
import * as fpixel from '../../utils/fpixel';
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
  const router = useRouter();
  const event = props.selectedEvent;

  const currentUrl =
    typeof window !== 'undefined' ? window.location.href : null;

  if (!event) {
    return (
      <>
        <div className='center'>
          <p>loading...</p>
        </div>
      </>
    );
  }
  console.log(event.title.toLocaleLowerCase());
  const onPixel = () => {
    fpixel.AddToCart({
      value: '30000',
      content_ids: event.id,
      currency: 'KRW',
      contents: event.title,
    });
    fpixel.Purchase({
      value: '30000',
      currency: 'KRW',
      contents: event.title,
      content_ids: event.id,
    });
  };
  return (
    <>
      <Head>
        <meta property='og:url' content={`${currentUrl}`} />
        <meta
          property='product:brand'
          content={`${event.title.toLocaleLowerCase()}`}
        />
        <meta property='product:availability' content='in stock' />
        <meta property='product:price:amount' content={`${30000}`} />
        <meta property='product:condition' content='used' />
        <meta
          property='product:plural_title'
          content={event.title.toLocaleLowerCase()}
        />
        <meta property='product:price:currency' content='KRW' />
        <meta property='product:item_group_id' content={`2521457291365392`} />
        <meta
          property='product:retailer_item_id'
          content={`2521457291365392`}
        />
        <meta property='product:catalog_id' content={`2521457291365392`} />
      </Head>
      <div onClick={onPixel} style={{ cursor: 'pointer' }}>
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
      </div>
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
