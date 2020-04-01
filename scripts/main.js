import { getEateries } from "./eateries/EateryProvider.js";
import { eaterySelector } from "./eateries/EaterySelector.js";
import { getAttractions } from "./attractions/AttractionProvider.js";
import { AttractionSelect }  from "./attractions/AttractionsSelector.js";
import { getParks } from "./parks/ParkProvider.js";
import { ParkSelect } from "./parks/ParkSelector.js";
import { ParkButton } from "./parks/ParkDialog.js";
// import { EateryButton } from "./eateries/EateryDialog.js";
// import { AttractionButton } from "./attractions/AttractionDialog.js";





import "./weather/WeatherList.js";








// Gets data from api. Once data is ready eateryselector method runs.
getEateries().then(eaterySelector)
getParks().then(ParkSelect)
getAttractions().then(AttractionSelect)


ParkButton()
// EateryButton()
// AttractionButton()
