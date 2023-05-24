import React from 'react';
import Link from 'next/link';
import styles from '../../styles/button.module.css';
type Props = {
  children: React.ReactNode;
  link?: string | undefined | null;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
const Button = (props: Props) => {
  if (props.link) {
    return (
      <Link className={styles.btn} href={props.link}>
        {props.children}
      </Link>
    );
  }
  return (
    <button style={{ cursor: 'pointer' }} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
