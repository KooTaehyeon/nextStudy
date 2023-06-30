import classes from './comment-list.module.css';

function CommentList(props: { items: any }) {
  const { items } = props;
  console.log(items, 'items');

  return (
    <ul className={classes.comments}>
      {items.map((el: { _id: string; text: string; name: string }) => {
        return (
          <li key={el._id}>
            <p>{el.text}</p>
            <div>
              By <address>{el.name}</address>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
