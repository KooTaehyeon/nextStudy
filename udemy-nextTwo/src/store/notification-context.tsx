import { createContext, useState } from 'react';

const NotificationContext: any = createContext({
  notification: null, // {},
  showNotification: () => {},
  hideNotification: () => {},
});

export const NotificationContextProvider = (props: any) => {
  const [] = useState();

  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
