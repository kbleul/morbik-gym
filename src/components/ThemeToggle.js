import { useTheme , useUpdateTheme } from "../utils/themeContex"
import { Button } from "@mui/material"




export default function ToggleBtns () {
    
    const theme = useTheme()
    const themeUpdater = useUpdateTheme()

const toogleTheme = () => {
    theme === "light" ? themeUpdater("dark") : themeUpdater("light")
}

return (<Button onClick={toogleTheme} style={{ color : theme === "light" ? "#3A1212" : "#fff666" }}>{theme === "light" ? 
        <span>Go Dark</span> :<span>Go Light</span>}</Button>)
}