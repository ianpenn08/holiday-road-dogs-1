import { getEateries } from "./eateries/EateryProvider.js";
import { getParks } from "./parks/ParkProvider.js";
import { getAttractions } from "./attractions/AttractionProvider.js";
import { AttractionSelect }  from "./attractions/AttractionsSelector.js";

getEateries()

getParks()

getAttractions().then(AttractionSelect)