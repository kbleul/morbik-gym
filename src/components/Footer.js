
import { Box , Stack , Typography} from "@mui/material"
import {useTheme} from "../utils/themeContex"

import Logo_footer from "../assets/images/MF(3).png"
import Logo_footer_dark from "../assets/images/MF(2).png"


const Footer = () => {

     const theme = useTheme()

     return(<Box mt="80px" bgcolor={theme === "light" ? "#f7f7f7" : "#1f2222"}>

            <article className={theme === "light" ? "footer_article" : "footer_article--dark"}>
               <section className="footer_project-section">
                    <h4>Other Projects</h4>
                    <ul>
                         <li><a href="https://morbikrecipe.netlify.app" target="_blank" rel="noreferrer">Morbik-Recipe</a></li>
                         <li><a href="https://morbik-movies.netlify.app" target="_blank" rel="noreferrer">Morbik-Movies</a></li>
                         <li><a href="https://k-artis.netlify.app" target="_blank" rel="noreferrer">K-ARTis</a></li>
                         <li><a href="https://seka-card-game.netlify.app" target="_blank" rel="noreferrer">Seka-Card-Game</a></li>
                         <li><a href="https://knotess.netlify.app" target="_blank" rel="noreferrer">K-Notes</a></li>
                    </ul>
               </section>

               <Stack className={theme === "light" ? "footer_section_right" : "footer_section_right--dark"} gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">

                   <img src={theme === "light" ? Logo_footer : Logo_footer_dark} alt="logo" width="200px" height="150px" /> 

                   <div className="flex">
                    <h4>Checkout My <span className="red">Github </span> - </h4>
                    <a href="https://github.com/kbleul" target="_blank" rel="noreferrer">Here</a>
                   </div>

                   <div className="flex">
                    <h4>Checkout My <span className="red">Portfolio </span> - </h4>
                    <a href="https://github.com/kbleul" target="_blank" rel="noreferrer">Here</a>
                   </div>

                    <Typography variant="h5" sx={{ fontSize: { lg: '12px', xs: '10px' } }} mt="41px" textAlign="center" pb="40px" color={theme === "light"  ? "black" : "white"}>Morbik Inc.</Typography>

               </Stack>

              </article>
          </Box>)
}

export default Footer