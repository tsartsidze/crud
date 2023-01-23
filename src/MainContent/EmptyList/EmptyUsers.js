import { makeStyles } from "mui-styles";

const useStyles = makeStyles(() => ({
  empty: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 0",
    marginTop: "20px",
    backgroundColor: "#34495e",
    color: "#ffffff",
    fontSize: "2rem",
    fontWeight: "bold",
    borderRadius: "8px",
    boxShadow: "3px 5px 20px grey",
  },
}));

const EmptyUsers = (props) => {
  const classes = useStyles();
  return <div className={classes.empty}>{props.children}</div>;
};

export default EmptyUsers;
