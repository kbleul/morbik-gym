import { Box, Typography ,Button } from "@mui/material"

import {useTheme} from "../utils/themeContex"

import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => {

    const theme = useTheme()

  return (  <Box sx={{ mt: { lg: '0px', xs: '2rem' }, ml: { sm: '50px' } }} position="relative" p="20px">
 

        <Typography color={theme === "light" ? "#000" : "#fefae0"} fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' }, marginLeft: {lg: "6%" , xs: "2%"} }} mb="23px" mt="10%" ml="6%">
            Sweat , Smile <br /> and Repeat
        </Typography>

        <Typography color={theme === "light" ? "#000" : "#fefae0"} sx={{ fontSize: { lg: '22px', xs: '18px' } }} fontFamily="Alegreya" lineHeight="35px" mb={4} ml="6%">
            Checkout the most effective exersises
        </Typography>

        <Button onClick={() => window.scrollTo(0, 1630)} 
          variant="contained" color="error" 
          href="#exersises" sx={{ backgroundColor : "#ff2625", padding : "10px", marginLeft: {lg:"26%", xs : "0%" }}}>
          Explore Exersises
        </Button>

        <Typography fontWeight={600} color={theme === "light" ? "#ff2625" : "#4a4e69"}
          sx={{
              opacity : 0.1,
              fontSize : { lg : "200px", xs : "5rem"}
          }}
          fontSize= "200px"
          >
            Exersise
        </Typography>

        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner;