import React, {useState , useContext} from "react"


 const locationContext = React.createContext()
 const locationUpdateContext = React.createContext()

 export const useMylocation = () => {  return useContext(locationContext);  }
 export const useUpdateMylocation = () => {  return useContext(locationUpdateContext);  }

 export function LocationProvider ({children}) {

    const [location, setlocation] = useState("home");
  
  
      return(
          <locationContext.Provider value={location} >
              <locationUpdateContext.Provider value = {setlocation} >
                  {children}
              </locationUpdateContext.Provider>
          </locationContext.Provider>
  
      )
  }
