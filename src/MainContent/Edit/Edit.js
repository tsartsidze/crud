import Button from "../../UI/Button";
import classes from "./Edit.module.css";

const Edit = ({ setInfo, info, onClose, edit }) => {
  const changeInfo = (key, value) => {
    setInfo({ ...info, [key]: value });
  };

  const closeEditModal = () => {
    onClose(false);
  };

  const editHandler = (event) => {
    event.preventDefault();

    edit({
      ...info,
    });

    onClose(false);
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
            value={info.name}
            onChange={(evet) => changeInfo("name", evet.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={info.email}
            onChange={(evet) => changeInfo("email", evet.target.value)}
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={info.date}
            onChange={(evet) => changeInfo("date", evet.target.value)}
          />
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <input
            type="number"
            id="number"
            value={info.number}
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
