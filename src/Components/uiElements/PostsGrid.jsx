import Container from "./Container";
import classes from "./PostsGrid.module.css";

const PostsGrid = ({ id, children }) => {
  return (
    <section className={classes.PostsGrid} id={id}>
      <Container className={classes.cont}>{children}</Container>
    </section>
  );
};

export default PostsGrid;
