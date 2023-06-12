import React, { useState } from 'react';
import axios from 'axios';
import { bulidFeedbackPath, extractFeedback } from '../api/feedback';
type DATA = {
  id: string;
  email: string;
  text: string;
};

const FeedbackPage = (props: any) => {
  const data = props;
  console.log(data);
  const [loadData, setLoadData] = useState<DATA>();
  const loadFeedbackHandler = async (id: string) => {
    const data = await axios.get(`/api/${id}`);

    console.log(data.data, 'dasd');
    setLoadData(data.data.feedback);
  };

  return (
    <>
      {loadData && <p>{loadData.email}</p>}
      <ul>
        {data.feedbackItems.map((item: DATA) => (
          <li key={item.id}>
            feedback: {item.text}{' '}
            <button onClick={() => loadFeedbackHandler(item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeedbackPage;

export const getStaticProps = async () => {
  const fileBuildFeedbackPath = bulidFeedbackPath();
  const data = extractFeedback(fileBuildFeedbackPath);

  // const data: any = await axios.get('/api/feedback');
  console.log(data, 'data');

  return {
    props: {
      feedbackItems: data,
    },
  };
};
