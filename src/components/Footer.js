
import { Box , Stack , Typography} from "@mui/material"
import morbik_fitness from "../assets/images/3.png"

const Footer = () => {
     return(<Box mt="80px" bgcolor="#fff3f4">
               <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
                    <img src={morbik_fitness} alt="logo" width="200px" height="150px" />

                    <Typography variant="h5" sx={{ fontSize: { lg: '18px', xs: '12px' } }} mt="41px" textAlign="center" pb="40px">Morbik Inc.</Typography>
               </Stack>
          </Box>)
}

export default Footer