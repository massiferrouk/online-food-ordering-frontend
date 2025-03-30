import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/DarkTheme";
import CustomerRoute from "./Routers/CustomerRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./components/State/Authentication/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
  }, [auth.jwt]);
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/*<Navbar/>*/}
        {/*<Home/>*/}
        {/*<RestaurantDetails/>*/}
        {/*<Cart/>*/}
        {/*<Profile/>*/}
        <CustomerRoute />
      </ThemeProvider>
    </div>
  );
}

export default App;
