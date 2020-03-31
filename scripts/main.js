import { getEateries } from "./eateries/EateryProvider.js";
import { getAttractions } from "./attractions/AttractionProvider.js";
import { getParks } from "./parks/ParkProvider.js";
import { AttractionSelect }  from "./attractions/AttractionsSelector.js";
import { eaterySelector } from "./eateries/EaterySelector.js";
import { ParkSelect } from "./parks/ParkSelector.js";
import { getWeather } from "./weather/WeatherProvider.js";
import "./weather/WeatherList.js"

// Gets data from api. Once data is ready eateryselector method runs.
getEateries().then(eaterySelector)
getParks().then(ParkSelect)
getAttractions().then(AttractionSelect)
//getWeather().then()

