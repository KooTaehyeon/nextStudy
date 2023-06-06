import React from 'react';
import { dumyProps } from '@/types';
import EventItem from './event-item';
import styles from '../../styles/event-list.module.css';
const EventList = (props: { items: dumyProps[] }) => {
  const { items } = props;
  // console.log(items);

  return (
    <ul className={styles.list}>
      {items.map((item: dumyProps) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          location={item.loctation}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
