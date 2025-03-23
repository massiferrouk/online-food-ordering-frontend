import Grid from "@mui/material/Grid";
import React from "react";
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

const categories = [
  "pizza",
  "burger",
  "fast food",
  "chinese",
  "indian",
  "italian",
  "thai",
  "mexican",
];

const foodTypes = [
  { lable: "All", value: "all" },
  { lable: "Vegetarian only", value: "vegetarian" },
  { lable: "Non-Vegetarian", value: "non-vegetarian" },
  { lable: "Vegan", value: "vegan" },
];

const RestaurantDetails = () => {
    const [foodType, setFoodType] = React.useState("all");
    const handleFilter = (e) => {
        /*setFoodType(e.target.value)*/
        console.log(e.target.value, e.target.name)
    }
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
                src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802819/cpfxroggttxg6tedfskd.jpg"
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
          <h1 className="text-4xl font-semibold text-left">Indian Fast Food</h1>
          <p className="text-gray-500 mt-1 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            nesciunt, aut quibusdam dolor vero modi dolorum animi neque
            aspernatur sit doloremque ad non itaque, optio delectus voluptatem
            sapiente cumque consectetur.
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
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">menu</div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
