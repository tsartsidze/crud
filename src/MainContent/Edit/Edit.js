import Button from "../../UI/Button";
import classes from "./Edit.module.css";

const Edit = (props) => {
  const changeInfo = (key, value) => {
    props.setInfo({ ...props.info, [key]: value });
  };

  const closeEditModal = () => {
    props.onClose(false);
  };

  const editHandler = (event) => {
    event.preventDefault();

    props.edit({
      id: props.info.id,
      name: props.info.name,
      email: props.info.email,
      date: props.info.date,
      number: props.info.number,
    });

    props.onClose(false);
  };

  return (
    <>
      <div className={classes.backdrop} onClick={closeEditModal}></div>
      <form className={classes.modal} onSubmit={editHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={props.info.name}
            onChange={(evet) => changeInfo("name", evet.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={props.info.email}
            onChange={(evet) => changeInfo("email", evet.target.value)}
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={props.info.date}
            onChange={(evet) => changeInfo("date", evet.target.value)}
          />
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <input
            type="number"
            id="number"
            value={props.info.number}
            onChange={(evet) => changeInfo("number", evet.target.value)}
          />
        </div>

        <Button type="submit" className={classes.editBtn}>
          edit
        </Button>
      </form>
    </>
  );
};

export default Edit;
