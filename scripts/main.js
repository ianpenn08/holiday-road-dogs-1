import { getEateries } from "./eateries/EateryProvider.js";
import { getAttractions } from "./attractions/AttractionProvider.js";
import { getParks } from "./parks/ParkProvider.js";
import { AttractionSelect }  from "./attractions/AttractionsSelector.js";
import { eaterySelector } from "./eateries/EaterySelector.js";
// Gets data from api. Once data is ready eateryselector method runs.
getEateries().then(eaterySelector)
getParks()
getAttractions().then(AttractionSelect)

