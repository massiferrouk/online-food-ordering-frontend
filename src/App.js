import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/DarkTheme";
import Home from "./components/Home/Home";
import RestaurantDetails from "./components/Restaurant/RestaurantDetails";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";
import CustomerRoute from "./Routers/CustomerRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./components/State/store";
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
