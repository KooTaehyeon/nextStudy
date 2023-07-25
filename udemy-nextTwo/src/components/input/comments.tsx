import { useEffect, useState, useContext } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '@/store/notification-context';
import { NotificationProps } from '@/types/index';
import { error } from 'console';

function Comments(props: any) {
  const { eventId } = props;
  const notificationCtx = useContext<NotificationProps>(NotificationContext);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      setIsFetchingComments((prev) => !prev);
      fetch(`/api/comments/${eventId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setComments(data.comments);
          setIsFetchingComments((prev) => !prev);
        });
    }
  }, [eventId, showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: any) {
    // send data to API
    notificationCtx.showNotification({
      // 로딩중
      title: 'Sending comment...',
      message: 'Your comment is currently being stored into a database',
      status: 'pending',
    });
    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        notificationCtx.showNotification({
          // 성공
          title: 'Success!',
          message: 'Your comment was saved!',
          status: 'success',
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          // 성공
          title: 'Error!',
          message: error.message || 'Something went wrong!',
          status: 'error',
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComments && <CommentList items={comments} />}
      {showComments && isFetchingComments && <p>Loading... </p>}
    </section>
  );
}

export default Comments;
