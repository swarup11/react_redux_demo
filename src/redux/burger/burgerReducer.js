import { BUY_BURGER } from "./burgerTypes"

const initialState = {
    numOfBurger: 30
}

const burgerReducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_BURGER:
            return {
                ...state,
                numOfBurger: state.numOfBurger-1
            }
        default:
            return state
    }
}

export default burgerReducer