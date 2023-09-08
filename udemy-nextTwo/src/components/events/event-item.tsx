/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
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

  useEffect(() => {
    const handleRouteChange = () => {
      fpixel.view();
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  const onClick = async () => {
    const value = {
      id: id,
      brand: title,
      value: '30000',
      title: title,
      currency: 'KRW',
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
      <li className={styles.item}>
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
            <div className={styles.actions} onClick={onClick}>
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
