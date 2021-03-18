import Data from '../data/data.json'


const initialState = {
    mylist: Data.mylist,
    recommendations: Data.recommendations
}
const RecommendationsReducer = (state = initialState, action) => {
    if (action.type === 'remove_list') {
        return {
            ...state,
            mylist: state.recommendations.filter((item) => item.id !== action.item.id),
            recommendations:
                (() => {
                    state.recommendations.push(action.item);
                    console.log("----Reccomendations------");
                    console.log(state.recommendations);
                    return state.recommendations;
                })()
        }
    }

    return state;
}

export default RecommendationsReducer