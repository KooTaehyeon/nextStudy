import MeetupList from '@/components/meetups/MeetupList';
import Layout from '@/components/layout/Layout';
import { useEffect, useState } from 'react';
import { MeetupData } from '@/types';
const DUMY = [
  {
    id: 'm1',
    title: 'A Title1',
    image:
      'https://blog.kakaocdn.net/dn/Idl0h/btq52jaeNpz/tjaLzr5i8kVUonLchfhok0/img.jpg',
    address: '지구',
    description: '지구에있는 이미지일까요?',
  },
  {
    id: 'm2',
    title: 'A Title2',
    image:
      'http://file3.instiz.net/data/cached_img/upload/2018/05/20/2/081718869d129b71e660e1daded277ef.jpg',
    address: '서울',
    description: '서울에있는 이미지일까요?',
  },
];
const HomePage = (props: MeetupData) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};
export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMY,
    },
    revalidate: 10,
  };
};

export default HomePage;
