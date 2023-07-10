import React, { useContext } from 'react';
import MainHeader from './main-header';
import Notification from '../ui/notifcation';
import NotificationContext from '@/store/notification-context';
type NotificationProps = {
  notification: null | {
    title: string;
    message: string;
    status: string;
  };
  showNotification: () => {};
  hideNotification: () => {};
};

const Layout = (props: { children: React.ReactNode }) => {
  const notificationCtx = useContext<NotificationProps>(NotificationContext);
  const activeNotifcation = notificationCtx.notification;
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotifcation && (
        <Notification
          title={activeNotifcation.title}
          message={activeNotifcation.message}
          status={activeNotifcation.status}
        />
      )}
    </>
  );
};

export default Layout;
