import MeetupList from '@/components/meetups/MeetupList';
import Layout from '@/components/layout/Layout';
import { useEffect, useState } from 'react';
import { MeetupData } from '@/types';
import axios from 'axios';
import { MongoClient } from 'mongodb';
// const DUMY = [
//   {
//     id: 'm1',
//     title: 'A Title1',
//     image:
//       'https://blog.kakaocdn.net/dn/Idl0h/btq52jaeNpz/tjaLzr5i8kVUonLchfhok0/img.jpg',
//     address: '지구',
//     description: '지구에있는 이미지일까요?',
//   },
//   {
//     id: 'm2',
//     title: 'A Title2',
//     image:
//       'http://file3.instiz.net/data/cached_img/upload/2018/05/20/2/081718869d129b71e660e1daded277ef.jpg',
//     address: '서울',
//     description: '서울에있는 이미지일까요?',
//   },
// ];
const HomePage = (props: MeetupData) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};
// export const getServerSideProps = async (context: any) => {
//   const req = context.req;
//   const res = context.res;
//   //서버 사이드 랜더링
//   return {
//     props: {
//       meetups: DUMY,
//     },
//   };
// };

export const getStaticProps = async () => {
  // 프리랜더링

  const client = await MongoClient.connect(
    'mongodb+srv://vcro12123:05321zxc@cluster0.6po88go.mongodb.net/meetups'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
