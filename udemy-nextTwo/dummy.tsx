import { dumyProps } from '@/types';

const DUMY: dumyProps[] = [
  {
    id: 'e1',
    title: 'A Title1',
    image:
      'https://blog.kakaocdn.net/dn/Idl0h/btq52jaeNpz/tjaLzr5i8kVUonLchfhok0/img.jpg',
    description: '지구에있는 이미지일까요?',
    loctation: 'somestreet 25, 12345 San Somewhoereo ',
    date: '2023-05-18',
    isFeatured: true,
  },
  {
    id: 'e2',
    title: 'A Title2',
    image:
      'http://file3.instiz.net/data/cached_img/upload/2018/05/20/2/081718869d129b71e660e1daded277ef.jpg',
    description: '서울에있는 이미지일까요?',
    loctation: 'somestreet 25, 12345 San Somewhoereo ',
    date: '2023-05-18',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'A Title3',
    image:
      'https://img.lovepik.com/free-png/20210923/lovepik-light-bulb-icon-free-vector-illustration-material-png-image_401294329_wh1200.png',
    description: '서울에있는 이미지일까요?',
    loctation: 'somestreet 25, 12345 San Somewhoereo ',
    date: '2023-05-18',
    isFeatured: false,
  },
];

export function getAllEvents() {
  return DUMY;
}
