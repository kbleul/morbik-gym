
import {Typography  , Stack} from "@mui/material"
import {useTheme} from "../utils/themeContex"

const Details = ({exercise_detail}) => {

    const { gifUrl , name , target }  = exercise_detail
    const theme = useTheme()
  
    return (
        <Stack gap="60px" sx={{flexDirection : {lg : "row" } , p : "20px", alignItems: "center"}}>

            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>

                <Typography sx={{ fontSize: { lg: '42px', xs: '30px' }, color : "red" }} fontWeight={700} textTransform="capitalize" textAlign="center">
                {name}</Typography>

                <Typography variant="h6" sx={{ fontSize: { lg: '24px', xs: '18px' } }} color={theme === "light" ? "#4F4C4C" : "#fff"}>

                    Exercises keep you strong.
                    <span style={{ textTransform: 'capitalize' }}>{" " + name}</span>  is one
                    of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                    <br /> mood and gain energy.

                </Typography>

            </Stack>
            
        </Stack>
    )
}

export default Details

