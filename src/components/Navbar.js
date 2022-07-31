
import { Link } from "react-router-dom"
import { Stack } from "@mui/material"

import { useTheme } from "../utils/themeContex"

import ThemeToggle from "./ThemeToggle"

import Logo from "../assets/images/2.png"


const Navbar = () => {

    const theme = useTheme()


    return (<Stack direction="row" justifyContent="space-around" 
    sx={{ gap : { sm : "122px", xs : "40px"} }} px="20px">
        <article classNAme="nav_container">
            <Link to="/">
                <img src={Logo} alt="logo" 
                style={{ height : "50px"}}  />
            </Link>

            <ThemeToggle />

            <Stack direction="row" gap="40px" fontSize="18px" fontWeight="bold" alignItems="center">
                <Link to="/" 
                style={{ textDecoration : "none", color : theme === "light" ? "#3A1212" : "rgb(238, 221, 78)", borderBottom: "3px solid #FF262"}}>
                   Home</Link>

                <a href="#Exersises" style={{ textDecoration : "none", color : theme === "light" ? "#3A1212" : "rgb(238, 221, 78)"}} >Exersises</a>
            </Stack>
        </article>
    </Stack>)
}

export default Navbar