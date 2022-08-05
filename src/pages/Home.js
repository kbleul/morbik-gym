
import {useState } from "react"
import {Box} from "@mui/material"
import HeroBanner from "../components/HeroBanner"
import Searchbox from "../components/Searchbox"
import Exercises from "../components/Exercises"


const Home = () => {
    const [current_bodypart, set_current_bodypart] = useState("all")
    const [exercise, setexercise] = useState([])

    return (<Box>
            <HeroBanner />
            <Searchbox setexercise={setexercise} current_bodypart={current_bodypart} set_current_bodypart={set_current_bodypart}/>
            <Exercises exercise={exercise} setexercise={setexercise} current_bodypart={current_bodypart} />
         
        </Box>)
}

export default Home