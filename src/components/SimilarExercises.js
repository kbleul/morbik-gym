
import {Box, Stack , Typography} from "@mui/material"

import HorizontalScrollbar from "./HorizontalScrollbar"
import Loader from "./Loader"

import {useTheme} from "../utils/themeContex"

const SimilarExercises = ({targetmuscle_exercises, equipment_exercises , set_targetmuscle_exe , set_equipmentexe}) => {

    const theme = useTheme()


    return(<Box>

            <Typography  color={theme === "light" ? "black" : "white"} ml="3%" mb="1%" sx= {{fontSize : {lg : "3rem", sx : "2rem"}}}>Exercises that target the same muscle group</Typography>

            <Stack direction="row" sx = {{ p : "2" , position : "relative"}}>

            <div className="scrollbar_div">
            {targetmuscle_exercises.length !== 0 ? 
                <HorizontalScrollbar bodyparts={targetmuscle_exercises} /> : <Loader />}
            </div>

            </Stack>

            <Typography   color={theme === "light" ? "black" : "white"} ml="3%" mb="1%" mt="8%"
            sx= {{fontSize : {lg : "3rem", sx : "2rem"}}}>Exercises that use the same equipment</Typography>
            <Stack direction="row" sx = {{ p : "2" , position : "relative"}}>

            <div className="scrollbar_div">

                {equipment_exercises.length !== 0 ? 
                    <HorizontalScrollbar bodyparts={equipment_exercises} /> : <Loader />}
            </div>
                
            </Stack>


        </Box>)
}

export default SimilarExercises