import React from 'react';

const UidPage = (props: { id: any }) => {
  console.log(props);

  return <div>{props.id}</div>;
};

export default UidPage;

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  console.log(context, 'context');

  const userId = params.uid;

  return {
    props: {
      id: 'userid-' + userId,
    },
  };
};
