import React, {useState , useContext} from "react"


 const themeContext = React.createContext()
 const themeUpdateContext = React.createContext()

 export const useTheme = () => {  return useContext(themeContext);  }
 export const useUpdateTheme = () => {  return useContext(themeUpdateContext);  }



export function ThemeProvider ({children}) {

  const [theme, settheme] = useState("light");


    return(
        <themeContext.Provider value={theme} >
            <themeUpdateContext.Provider value = {settheme} >
                {children}
            </themeUpdateContext.Provider>
        </themeContext.Provider>

    )
}