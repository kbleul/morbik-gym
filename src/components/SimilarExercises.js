
import {Box, Stack , Typography} from "@mui/material"

import HorizontalScrollbar from "./HorizontalScrollbar"
import Loader from "./Loader"

const SimilarExercises = ({targetmuscle_exercises, equipment_exercises}) => {

    return(<Box>

            <Typography variant="h3">Exercises that target the same muscle group</Typography>

            <Stack direction="row" sx = {{ p : "2" , position : "relative"}}>

            {targetmuscle_exercises.length !== 0 ? 
                <HorizontalScrollbar bodyparts={targetmuscle_exercises} /> : <Loader />}

            </Stack>

            <Typography variant="h3">Exercises that use the same equipment</Typography>
            <Stack direction="row" sx = {{ p : "2" , position : "relative"}}>

            {equipment_exercises.length !== 0 ? 
                <HorizontalScrollbar bodyparts={equipment_exercises} /> : <Loader />}
                
            </Stack>


        </Box>)
}

export default SimilarExercises