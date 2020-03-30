import { getEateries } from "./eateries/EateryProvider.js";
import { getParks } from "./parks/ParkProvider.js";
import { getAttractions } from "./attractions/AttractionProvider.js";
import { AttractionSelect }  from "./attractions/AttractionsSelector.js";
import { ParkSelect } from "./parks/ParkSelector.js";


getEateries()

getParks().then(ParkSelect)

getAttractions().then(AttractionSelect)

