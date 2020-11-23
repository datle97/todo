import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableContainer,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const TodoList = () => {
  const classes = useStyles();
  const { todoList } = useSelector((state) => state.reducer);

  return (
    <Paper>
      <Toolbar variant="dense" className={classes.toolbar}>
        <Typography className={classes.title}>Todo List</Typography>
        <Typography>
          Completed: {todoList.filter((todo) => todo.checked).length}
        </Typography>
      </Toolbar>
      <TableContainer>
        <Table>
          <TableBody>
            {todoList.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TodoList;
