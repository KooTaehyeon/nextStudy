import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { MeetupData } from '@/types';
import axios from 'axios';
import Head from 'next/head';
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
  return (
    <>
      <Head>
        <title>next&&Ts add a new meetup</title>
        <meta name='next&TS 학습 newForm' content='몽고디비에 데이터 넣기!' />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </>
  );
};

export default NewMeetUp;
