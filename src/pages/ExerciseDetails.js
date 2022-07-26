import {useState, useEffect } from "react"
import  { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { youtube_options , exercise_options, fetchData } from "../utils/fetchData"

import Details from "../components/Details"
import ExerciseVideos from "../components/ExerciseVideos"
import SimilarExercises from "../components/SimilarExercises"

import Loader  from "../assets/images/loader.gif"


export const APIURLs = {
    EXERCISE_DB : "https://exercisedb.p.rapidapi.com",
    YOUTUBE_SEARCH : "https://youtube-search-and-download.p.rapidapi.com"
}


const ExerciseDetails = () => {

    const [exercise_detail, set_exercise_detail] = useState({})
    const [youtube_videos, setyoutube_videos] = useState([])
    const [targetmuscle_exe, set_targetmuscle_exe] = useState([])
    const [equipmentexe, set_equipmentexe] = useState([])


    const { id } = useParams()

    useEffect(() => {

        const fetch_exercise_details = async () => {

            const exercise_detail_response =  await fetchData(`${APIURLs.EXERCISE_DB}/exercises/exercise/${id}`, exercise_options )

                        
                        set_exercise_detail(exercise_detail_response)
                          window.scrollTo(0,0);

                const youtube_response =  await fetchData(`${APIURLs.YOUTUBE_SEARCH}/search?query=${exercise_detail_response.name}`, youtube_options)
                
                       setyoutube_videos(youtube_response.contents)
                          window.scrollTo(0,0);


                let targetMuscle_response = await fetchData(
                    `${APIURLs.EXERCISE_DB}/exercises/target/${exercise_detail_response.target}`, exercise_options)

                    targetMuscle_response = targetMuscle_response.slice(0,15)
                      set_targetmuscle_exe(targetMuscle_response)


                let equipmentExercise_response = await fetchData(
                    `${APIURLs.EXERCISE_DB}/exercises/equipment/${exercise_detail_response.equipment}`, exercise_options)

                    equipmentExercise_response = equipmentExercise_response.slice(0,15)
                     set_equipmentexe(equipmentExercise_response)


        }

        fetch_exercise_details()
        
    },[id])



    return (<Box>

           {  Object.keys(exercise_detail).length === 0 ? 
                <div className="loading_container">
                    <img  src={Loader} alt="loading"/>
                </div>
             :  <Details exercise_detail={exercise_detail}/>
            }

            
           { exercise_detail.length === 0 ? 
                <div className="loading_container">
                   <img  src={Loader} alt="loading"/>
                </div> 
             :  <ExerciseVideos exercise_videos={youtube_videos} name={exercise_detail.name}/>
            }


           { targetmuscle_exe.length === 0 || equipmentexe.length === 0  ?
                <div className="loading_container">
                  <img src={Loader} alt="loading"/>
                </div>
              : <SimilarExercises targetmuscle_exercises = {targetmuscle_exe} equipment_exercises={equipmentexe} set_targetmuscle_exe = {set_targetmuscle_exe} set_equipmentexe = {set_equipmentexe} /> 
           }
        </Box>)
}

export default ExerciseDetails

