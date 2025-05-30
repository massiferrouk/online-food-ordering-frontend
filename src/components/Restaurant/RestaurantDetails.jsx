import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import {
  Divider,
  FormControl,
  RadioGroup,
  Typography,
  Radio,
  FormControlLabel,
} from "@mui/material";
import MenuCard from "./MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantById, getRestaurantsCategory } from "../State/Restaurant/Action";

const foodTypes = [
  { lable: "All", value: "all" },
  { lable: "Vegetarian only", value: "vegetarian" },
  { lable: "Non-Vegetarian", value: "non-vegetarian" },
  { lable: "Vegan", value: "vegan" },
];

const menu=[1,1,1,1]

const RestaurantDetails = () => {
    const [foodType, setFoodType] = React.useState("all");
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const {auth, restaurant} = useSelector(store=>store)

    const {id,city} = useParams()

    const handleFilter = (e) => {
        /*setFoodType(e.target.value)*/
        console.log(e.target.value, e.target.name)
    }

    console.log("restaurant", restaurant)

    useEffect(() => {
        dispatch(getRestaurantById({restaurantId:id, jwt}))
        dispatch(getRestaurantsCategory(id, jwt))
    }, [])

  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10 text-left">
          Home/india/indian fast food
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[0]}
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[1]}
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802825/dtwyuhxuawmg3qzffv84.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold text-left">{restaurant.restaurant?.name}</h1>
          <p className="text-gray-500 mt-1 text-left">
            {restaurant.restaurant?.description}
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>Tizi Rached, Tizi Ouzou</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>Mon-Sun: 9:00 AM - 9:00 PM (Today)</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28 text-left">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem"}}>
                Food Type
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup onChange={handleFilter} name="food_type" value={foodType} >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.lable}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider/>
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup onChange={handleFilter} name="food_type" value={foodType} >
                  {restaurant.categories.map((item) => (
                    <FormControlLabel
                      key={item.id}
                      value={item.id}
                      control={<Radio />}
                      label={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10 text-left">
            {menu.map((item)=><MenuCard/>)}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
