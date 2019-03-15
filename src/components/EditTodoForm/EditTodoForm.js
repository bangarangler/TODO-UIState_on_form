import React from "react";

const editTodoForm = props => {
  return (
    <React.Fragment>
      <form>
        <input
          type="text"
          placeholder="Edit Todo..."
          name="edit"
          value={props.edit}
          onChange={props.handleChange}
        />
        <button onClick={props.handleUpdate}>Update</button>
      </form>
    </React.Fragment>
  );
};

export default editTodoForm;
