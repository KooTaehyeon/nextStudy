import classes from './Card.module.css';
import { ReactChild } from '../../types';

function Card(props: ReactChild) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
