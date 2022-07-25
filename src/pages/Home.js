
import {useState} from "react"
import {Box} from "@mui/material"
import HeroBanner from "../components/HeroBanner"
import Searchbox from "../components/Searchbox"
import Exercises from "../components/Exercises"



const Home = () => {
//Note : make use of useContext instead
    const [bodypart, set_bodypart] = useState("all")
    const [exercise, setexercise] = useState([])

    return (<Box>
            <HeroBanner />
            <Searchbox setexercise={setexercise} bodypart={bodypart} set_bodypart={set_bodypart}/>
            <Exercises exercise={exercise} setexercise={setexercise} bodypart={bodypart} />
         
        </Box>)
}

export default Home