import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div>
      <Link href={'/'}>페이지 정보가 없습니다 뒤로가주세요</Link>
    </div>
  );
};

export default NotFoundPage;
