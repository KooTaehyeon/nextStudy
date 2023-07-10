import { useContext } from 'react';

import classes from '../../styles/notifcation.module.css';
import NotificationContext from '../../store/notification-context';
type NotificationProps = {
  notification: null | {
    title: string;
    message: string;
    status: string;
  };
  showNotification: (notification: {
    title: string;
    message: string;
    status: string;
  }) => {};
  hideNotification: () => {};
};
function Notification(props: any) {
  const notificationCtx = useContext<NotificationProps>(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  if (status === 'pending') {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;
  //
  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
