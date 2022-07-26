
import { useState, useEffect } from "react"
import Pagination from "@mui/material/Pagination"
import { Box, Stack, Typography } from "@mui/material"
import { exercise_options, fetchData } from "../utils/fetchData"



const Exercises = ({ exercise, setexercise, bodypart }) => {

    useEffect(() => {
        const fetchbody_all_exercises = async () => {
            const response = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exercise_options)


            console.log("exercises")
            console.log( response)
 
            setexercise([...response])
        }
 
        fetchbody_all_exercises()
       
     }, [])

    return (<Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
        <Typography variant="h4" fontWeight="bold"
            sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">S
            howing Results</Typography>

            <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                {exercise.map((item,index) => ( <p key={index}>{item.name}</p>))}
            </Stack>
    </Box>)
}

export default Exercises