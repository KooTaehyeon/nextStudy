import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import { ReactNode } from '../../types/index';

function Layout(props: ReactNode) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
