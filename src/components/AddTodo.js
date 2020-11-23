import {
  Paper,
  InputBase,
  Divider,
  makeStyles,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/actions";
import { v1 as uuid } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: 0,
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(3, 0),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  divider: {
    height: 28,
  },
  button: {
    textTransform: "none",
    borderRadius: "0 4px 4px 0",
  },
}));

const AddTodo = () => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text) {
      const newTodo = { id: uuid(), text, checked: false };
      dispatch(addTodo(newTodo));
      setText("");
    }
  };

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <InputBase
        className={classes.input}
        autoFocus
        placeholder="Enter new todo"
        value={text}
        onChange={handleChange}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <Button color="primary" type="submit" className={classes.button}>
        Add
      </Button>
    </Paper>
  );
};

export default AddTodo;
