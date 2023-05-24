import React from 'react';
import MainHeader from './main-header';
const layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default layout;
