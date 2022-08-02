import { Link } from "react-router-dom"

import { Stack , Button , Typography} from "@mui/material"
import {useTheme} from "../utils/themeContex"

import { useUpdateMylocation } from "../utils/locationContext"


const ExerciseCard = ({exercise}) => {

    const theme = useTheme()
    const setLocation = useUpdateMylocation()



    return(
        <Link to={`/exercise/${exercise.id}`} onClick={() => setLocation("exercise")} className={theme === "light" ? "exercise-card" : "exercise-card--dark"}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

            <Stack direction="row" justifyContent="end">
                <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', 
                borderRadius: '20px', textTransform: 'capitalize' }}>{exercise.bodyPart}</Button>
                <Button sx={{ mr:"2%", ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', 
                borderRadius: '20px', textTransform: 'capitalize' }}>{exercise.target}</Button>
            </Stack>

            <Typography ml="21px" color={theme === "light" ? "#000" : "#fff"} fontWeight="bold" 
            sx={{ fontSize: { lg: '18px', xs: '14px' } }} mt="11px" pb="10px" 
            textTransform="capitalize" fontSize="22px">
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard