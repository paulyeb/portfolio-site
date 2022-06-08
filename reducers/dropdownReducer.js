const dropdownReducer = (state, action) => {
    switch(action.type) {
        case "toggle" :
            return {...state, dropdown: !state.dropdown}
        default :
            return state
    }
}

export default dropdownReducer;