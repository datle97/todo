const { createMuiTheme } = require("@material-ui/core");

const overrides = {
  overrides: {
    // khi dùng table trong Paper => 2 border-bottom(tự động thêm border last child)
    MuiTableRow: {
      root: {
        "&:last-child td": {
          borderBottom: 0,
        },
      },
    },
  },
};

export const lightTheme = createMuiTheme({
  ...overrides,
  palette: {
    type: "light",
  },
});

export const darkTheme = createMuiTheme({
  ...overrides,
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9",
    },
    error: {
      main: "#f48fb1",
    },
  },
});
