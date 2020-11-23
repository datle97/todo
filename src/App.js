import { useState } from "react";
import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const switchTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header darkMode={darkMode} switchTheme={switchTheme} />
      <Container maxWidth="md" component="main">
        <AddTodo />
        <TodoList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
