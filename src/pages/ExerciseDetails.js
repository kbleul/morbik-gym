import {useState, useEffect } from "react"
import  { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { exercise_options, fetchData } from "../utils/fetchData"

import Details from "../components/Details"


export const APIURLs = {
    EXERCISE_DB : "https://exercisedb.p.rapidapi.com",
    YOUTUBE_SEARCH : "https://youtube-search-and-download.p.rapidapi.com"
}


const ExerciseDetails = () => {

    const [exercise_detail, set_exercise_detail] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const fetch_exercise_details = async () => {
            const exercise_detail_response = 
                        await fetchData(`${APIURLs.EXERCISE_DB}/exercises/exercise/${id}`, exercise_options )
                        set_exercise_detail(exercise_detail_response)

        }

        fetch_exercise_details()
    },[id])

    return (<Box>
            <Details exercise_detail={exercise_detail}/>
        </Box>)
}

export default ExerciseDetails

// 
// <ExerciseVideos />
// <SimilarExercises />