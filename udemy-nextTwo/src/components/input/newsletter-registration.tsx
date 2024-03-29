import classes from './newsletter-registration.module.css';
import { useRef, useContext } from 'react';
import NotificationContext from '@/store/notification-context';
import { NotificationProps } from '@/types/index';

function NewsletterRegistration() {
  const inputRef = useRef<HTMLInputElement>(null);
  const notificationCtx = useContext<NotificationProps>(NotificationContext);

  function registrationHandler(event: any) {
    event.preventDefault();
    const enteredEmail = inputRef.current?.value;

    notificationCtx.showNotification({
      title: 'Signing',
      message: 'Register for newsletter',
      status: 'pending',
    });

    fetch('api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || 'Something went wrong!');
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Successfully registered for newsletter!',
          status: 'success',
        });
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: 'Error!',
          message: err.message || 'Something went wrong!',
          status: 'error',
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={inputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
