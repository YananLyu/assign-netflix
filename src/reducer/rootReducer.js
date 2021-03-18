import { combineReducers } from "redux";
import MyListReducer from "./myListReducer";
import RecommendationsReducer from "./recommendationsReducer";

const rootReducer = combineReducers({
    rMyList: MyListReducer,
    rRecommendation: RecommendationsReducer
});

export default rootReducer;