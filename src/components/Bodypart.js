
import {Stack, Typography} from "@mui/material"
import Icon from "../assets/icons/gym.png"

const Bodypart = ({item, current_bodypart , set_current_bodypart}) => {

    const showExercise = item => {
        set_current_bodypart(item)
        console.log(item)
        window.scrollTo({top : 1800, left : 100 , behavior : "smooth"})
    }


    return (<Stack 
        type="button"
        alignItems="center"
        justifyContent = "center"
        className = "bodyPart-card"
        sx={{ borderTop: current_bodypart === item ? '4px solid #FF2625' : "", background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '280px', cursor: 'pointer', gap: '47px'}}
        onClick={() => showExercise(item)}
        >
            <img src={Icon} alt="dumbel" style={{ width : "40px", height : "40px"}} />
            <Typography fontSize="24px" fontWeight="bold" color="#3A1212"
            textTransform="capitalize">
                    {item}
            </Typography>
        </Stack>)
}

export default Bodypart