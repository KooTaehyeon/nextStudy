import MeetupDetails from '../../components/meetups/MeetupDetail';
import { MeetupData } from '@/types';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

const MeetupDetail = (props: MeetupData) => {
  console.log(props);

  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name={'description'} content={props.meetupData.description} />
      </Head>
      <MeetupDetails
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
        // id={''}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://vcro12123:05321zxc@cluster0.6po88go.mongodb.net/meetups'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, {}).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export const getStaticProps = async (context: {
  params: { meetupId: string };
}) => {
  // 프리랜더링
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://vcro12123:05321zxc@cluster0.6po88go.mongodb.net/meetups'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  //_id: meetupId
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  console.log(selectedMeetup, 'ddddddd');
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
    revalidate: 10,
  };
};

export default MeetupDetail;
