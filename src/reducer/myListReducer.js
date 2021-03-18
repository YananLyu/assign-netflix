import Data from '../data/data.json'

const initialState = {
    mylist: Data["mylist"],
    recommendations: Data["recommendations"]
}
const MyListReducer = (state = initialState, action) => {
    if (action.type === 'add_list') {

        return {
            ...state,
            mylist: (() => {
                state.mylist.push(action.item);
                console.log("----MyList------");
                console.log(state.mylist);
                console.log(action.item.id);
                console.log("----MyRecc------");
                console.log(state.recommendations.filter((item) => item.id !== action.item.id));
                return state.mylist
            })(),
            recommendations:
                state.recommendations.filter((item) => item.id !== action.item.id)
        }
    }
    return state;
}

export default MyListReducer;