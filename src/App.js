import "./App.css"

import { useEffect } from "react"
import { Route , Routes } from "react-router-dom"

import {useTheme , useUpdateTheme} from "./utils/themeContex"
import { useLocalStorage  } from "./utils/useStorage"

import { Box } from "@mui/material"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import ExerciseDetails from "./pages/ExerciseDetails"



function App() {

    const theme = useTheme(); 
    const themeUpdater = useUpdateTheme()

    const [currentTheme, setTheme, removeTheme ] = useLocalStorage("myTheme", "light") 

    console.log(currentTheme)

    useEffect(() => {
      themeUpdater(currentTheme) 
      console.log(theme)
    }, [])
    
   
    
  return (
    <Box width="400px" sx={{width : { x1 : "1488px" }, 
   backgroundColor: theme === "light" ? '#fff' : "#2a2b2d"}} m="auto">
       <Navbar  />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetails />} />
        </Routes>
      
       <Footer />
    </Box>
  );
}

export default App;
