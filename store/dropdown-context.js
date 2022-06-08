import { createContext, useReducer } from "react";
import dropdownReducer from "../reducers/dropdownReducer";

export const DropdownContext = createContext();

const initialState = {
    dropdown: false
}

const DropdownProvider = ({children}) => {
    const [state, dispatch] = useReducer(dropdownReducer, initialState);

    return <DropdownContext.Provider value={{state, dispatch}}>
        {children}
    </DropdownContext.Provider>
}

export default DropdownProvider;