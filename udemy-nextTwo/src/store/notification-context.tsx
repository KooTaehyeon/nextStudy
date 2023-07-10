import { createContext, useEffect, useState } from 'react';
type NotificationProps = {
  title?: string;
  message?: string;
  status?: string;
};
const NotificationContext: any = createContext({
  notification: null || {}, // {},
  showNotification: (notificationData: NotificationProps) => {},
  hideNotification: () => {},
});

export const NotificationContextProvider = (props: any) => {
  const [activeNotification, setActiveNotification] =
    useState<NotificationProps | null>();
  useEffect(() => {
    if (
      (activeNotification && activeNotification.status === 'success') ||
      activeNotification?.status === 'error'
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotificationHandler = (notificationData: NotificationProps) => {
    setActiveNotification(notificationData);
  };
  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
