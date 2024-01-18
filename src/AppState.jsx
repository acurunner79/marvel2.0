import React from "react";


///////////////////////////
// INTITIAL STATE
//////////////////////////

const initialState = {
    baseUrl: 'https://gateway.marvel.com/v1/public',
    hashStr: 0,
    date: 0,
    timestamp: 0
}

////////////////////////////
// REDUCER
////////////////////////////
// Action = { type: "", payload: ---}
////////////////////////////

const reducer = (state, action) => {
    let newState

    switch(action.type){

        case 'search':
            newState = {...state, searchInput: action.payload}
            // console.log('Appstate search data: ', newState)
            return newState

        default:
            return state
    }
}

//////////////////////////
// APP CONTEXT
/////////////////////////
const AppContext = React.createContext(null)

export const AppState = (props) => {

    const [state, dispatch] = React.useReducer(reducer, initialState)

    return  <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>
}

////////////////////////
// useAppState Hook
///////////////////////
export const useAppState = () => {
    return React.useContext(AppContext)
}