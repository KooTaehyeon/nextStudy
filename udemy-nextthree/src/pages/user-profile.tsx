import { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';

const UserProfilePage = (props: { username: string }) => {
  return <h1>{props.username}</h1>;
};

export default UserProfilePage;

type SSRContext = {
  params: {};
  req: NextApiRequest;
  res: NextApiResponse;
};

export const getServerSideProps = async (context: SSRContext) => {
  const { params, req, res } = context;
  // console.log(req, 'req');
  // console.log(res, 'res');
  console.log('server');
  return {
    props: {
      username: 'xogus18',
    },
  };
};
