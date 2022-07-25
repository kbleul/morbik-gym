
import { useState, useEffect } from "react"
import Pagination from "@mui/material/Pagination"
import { Box, Stack, Typography } from "@mui/material"
import { exercise_options, fetchData } from "../utils/fetchData"



const Exercises = ({ exercise, setexercise, bodypart }) => {

    console.log(exercise)

    return (<Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
        <Typography variant="h4" fontWeight="bold"
            sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">S
            howing Results</Typography>

            <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                {exercise.map((item,index) => ( <p>{item.name}</p>))}
            </Stack>
    </Box>)
}

export default Exercises