import { Box, Stack, Typography ,Button } from "@mui/material"
import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => {
  return (  <Box sx={{ mt: { lg: '0px', xs: '2rem' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography color="#FF2626" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>

        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
            Sweat , Smile <br /> and Repeat
        </Typography>

        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={4}>
            Checkout the most effective exersises
        </Typography>

        <Button variant="contained" color="error" 
          href="#exersises" sx={{ backgroundColor : "#ff2625", padding : "10px"}}>
            Explore Exersises
        </Button>

        <Typography fontWeight={600} color="#ff2625"
          sx={{
              opacity : 0.1,
              display : { lg : "block", xs : "none"}
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