import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { MeetupData } from '@/types';
import axios from 'axios';
import { useRouter } from 'next/router';

const NewMeetUp = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData: MeetupData) => {
    const response = await axios.post('/api/new-meetup', {
      ...enteredMeetupData,
    });
    const data = await response;
    console.log(data, 'data');
    router.push('/');
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUp;
