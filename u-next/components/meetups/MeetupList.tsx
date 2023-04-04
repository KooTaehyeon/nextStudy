import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import { ReactNode } from '@/types';
type MapType = {
  image: string;
  title: string;
  content: string;
  address: string;
  id: number | string;
};

function MeetupList(props: ReactNode | []) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup: MapType) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
