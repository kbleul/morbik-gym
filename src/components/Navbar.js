
import { Link } from "react-router-dom"
import { Stack } from "@mui/material"

import { useTheme } from "../utils/themeContex"

import ThemeToggle from "./ThemeToggle"

import Logo from "../assets/images/Logo_top.png"
import Logo_dark from "../assets/images/Logo_top_dark.jpg"

import { useMylocation , useUpdateMylocation } from "../utils/locationContext"




const Navbar = () => {

    const theme = useTheme()
    const location = useMylocation()
    const setLocation = useUpdateMylocation()

    return (<Stack direction="row" justifyContent="space-around" 
    sx={{ gap : { sm : "122px", xs : "40px"} }} px="20px">

        <article className="nav_container">

            <Link to="/" onClick={() => setLocation("home") } className="logo_container">
               {theme === "light" ?  
                <img src={Logo} alt="logo"  style={{ height : "50px"}} /> :  
                <img src={Logo_dark} alt="logo" style={{ height : "50px"}}  />  }
            </Link>

            <ThemeToggle />

            <Stack direction="row" gap="40px" fontSize="18px" fontWeight="bold" alignItems="center">

                <Link to="/" 
                    style={{ textDecoration : "none", color : theme === "light" ? "#3A1212" : "rgb(238, 221, 78)", borderBottom: "3px solid #FF262" , fontWeight : location === "home" ? "bold" : "normal"}}  
                    onClick={() => setLocation("home")} >
                   Home
                </Link>

                <a href="#exercises" style={{ textDecoration :"none", color : theme === "light" ? "#3A1212" : "rgb(238, 221, 78)" , fontWeight : location === "exercise" ? "bold" : "normal"}} >Exersises</a>

            </Stack>

        </article>
    </Stack>)
}

export default Navbar