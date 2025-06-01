import { useContext, createContext, useState } from 'react'

//Create context
const CityContext = createContext()

//Wrap the theme provider
export const CityProvider = ({children}) => {
    //initial state for theme
    const [ city, setCity ] = useState("Conwy");

    return (
        <CityContext.Provider  value ={{ city, setCity }}>
            {children}
        </CityContext.Provider>
    )
}

//Create a custom hook to allow the app to consume the context
export const useCity = () => useContext(CityContext);
