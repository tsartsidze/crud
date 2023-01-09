import classes from "./EmptyUsers.module.css";

const EmptyUsers = (props) => {
  return <div className={classes.empty}>{props.children}</div>;
};

export default EmptyUsers;
