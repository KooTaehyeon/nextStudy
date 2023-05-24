import classes from '../../../styles/logistics-item.module.css';

function LogisticsItem(props: {
  children: React.ReactNode;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
