import { useState } from "react";
import {
  Checkbox,
  IconButton,
  InputBase,
  makeStyles,
  TableCell,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  checkTodo,
  editTodo,
  removeTodo,
  selectTodo,
  unselectTodo,
} from "../actions/actions";

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  completed: {
    textDecoration: "line-through",
  },
}));

const TodoItem = ({ todo }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const { editId } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editTodo(todo.id, text));
    dispatch(unselectTodo());
  };

  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          checked={todo.checked}
          onChange={() => dispatch(checkTodo(todo.id))}
        />
      </TableCell>
      {editId !== todo.id ? (
        <>
          <TableCell
            align="left"
            padding="none"
            className={clsx({
              [classes.completed]: todo.checked,
            })}
          >
            {todo.text}
          </TableCell>
          <TableCell align="right" padding="checkbox">
            <IconButton
              onClick={() => {
                // dùng text của todo hiện tại(khi thay đổi text và huỷ sẽ không làm thay đổi giá trị ban đầu)
                setText(todo.text);
                dispatch(selectTodo(todo.id));
              }}
            >
              <EditIcon />
            </IconButton>
          </TableCell>
          <TableCell align="right" padding="checkbox">
            <IconButton onClick={() => dispatch(removeTodo(todo.id))}>
              <DeleteIcon color="error" />
            </IconButton>
          </TableCell>
        </>
      ) : (
        <>
          <TableCell align="left" padding="none">
            <form id="editForm" onSubmit={handleSubmit}>
              <InputBase
                className={classes.input}
                value={text}
                autoFocus
                onFocus={(event) => {
                  event.target.select();
                }}
                fullWidth
                onChange={handleChange}
              />
            </form>
          </TableCell>
          <TableCell align="right" padding="checkbox">
            {/* lỗi khi chỉ dùng IconButton => auto submit??? */}
            <div>
              <IconButton type="submit" form="editForm">
                <DoneIcon />
              </IconButton>
            </div>
          </TableCell>
          <TableCell align="right" padding="checkbox">
            <IconButton onClick={() => dispatch(unselectTodo())}>
              <CloseIcon color="error" />
            </IconButton>
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

export default TodoItem;
