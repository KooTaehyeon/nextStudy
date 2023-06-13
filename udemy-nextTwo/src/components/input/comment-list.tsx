import classes from './comment-list.module.css';

function CommentList(props: { items: any }) {
  const { items } = props;
  console.log(items);

  return (
    <ul className={classes.comments}>
      {items.map((el: { id: string; text: string; name: string }) => {
        return (
          <li key={el.id}>
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
