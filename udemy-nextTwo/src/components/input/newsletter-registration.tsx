import classes from './newsletter-registration.module.css';
import { useRef } from 'react';
function NewsletterRegistration() {
  const inputRef = useRef<HTMLInputElement>(null);

  function registrationHandler(event: any) {
    event.preventDefault();
    const enteredEmail = inputRef.current?.value;
    console.log('dd', enteredEmail);

    fetch('api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
