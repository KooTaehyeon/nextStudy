import React from 'react';
import { useRouter } from 'next/router';
const ProjectIdPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
};

export default ProjectIdPage;
