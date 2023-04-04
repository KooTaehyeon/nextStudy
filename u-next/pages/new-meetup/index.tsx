import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { MeetupData } from '@/types';

const NewMeetUp = () => {
  const addMeetupHandler = (enteredMeetupData: MeetupData) => {
    console.log(enteredMeetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUp;
