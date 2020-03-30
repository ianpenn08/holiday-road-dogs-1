import { getEateries } from "./eateries/EateryProvider.js";
import { eaterySelector } from "./eateries/EaterySelector.js";
// Gets data from api. Once data is ready eateryselector method runs.
getEateries().then(eaterySelector)