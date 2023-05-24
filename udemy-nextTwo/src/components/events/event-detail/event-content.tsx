import React from 'react';
import classes from '../../../styles/event-content.module.css';

function EventContent(props: { children: React.ReactNode }) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
