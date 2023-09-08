/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/event-item.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as fpixel from '../../utils/fpixel';

const EventItem = (props: any) => {
  const { title, image, date, location, id } = props;
  const router = useRouter();
  const humanReadableDate = new Date(date).toLocaleDateString('ko-kr', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(',', ' \n');
  const exploreLink = `/events/${id}`;
  const onClick = () => {
    const value = {
      id: id,
      brand: title,
      value: '30000',
      title: title,
      currency: '원',
      test: 'txt',
    };
    const handleRouteChange = () => {
      fpixel.view({ value });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  };

  return (
    <>
      {' '}
      <Head>
        <meta
          property='og:url'
          content={`https://barofish.com${router.pathname}?id=${router?.query.id}`}
        />
        <meta property='product:brand' content={`${title}`} />
        <meta property='product:availability' content='in stock' />
        <meta property='product:price:amount' content={`${30000}`} />
        <meta property='product:condition' content='basic' />
        <meta property='product:plural_title' content={title} />
        <meta property='product:price:currency' content='KRW' />
        <meta property='product:item_group_id' content={`${id}`} />
        <meta property='product:retailer_item_id' content={`${id}`} />
      </Head>
      <li className={styles.item} onClick={onClick}>
        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          // style={{ width: '300px', height: '300px' }}
          // onError={image}
        />
        <div className={styles.content}>
          <div className={styles.summary}>
            <h2>{title}</h2>
            <div className={styles.date}>
              <DateIcon />
              <time>{humanReadableDate}</time>
            </div>
            <div className={styles.address}>
              <AddressIcon />
              <address>{formattedAddress}</address>
            </div>
            <div className={styles.actions}>
              <Button link={exploreLink}>
                Explore Event
                <span className={styles.icon}>
                  <ArrowRightIcon />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default EventItem;
