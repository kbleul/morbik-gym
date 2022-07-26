
import {useState , useEffect} from "react"
import {Box} from "@mui/material"
import HeroBanner from "../components/HeroBanner"
import Searchbox from "../components/Searchbox"
import Exercises from "../components/Exercises"



const Home = () => {
//Note : make use of useContext instead
    const [current_bodypart, set_current_bodypart] = useState("all")
    const [exercise, setexercise] = useState([])

    useEffect(() => {
        console.log("current_bodypart"
        )
        console.log(current_bodypart)
        console.log("exercisepart" )
        console.log(exercise)


    },[current_bodypart,exercise])

    return (<Box>
            <HeroBanner />
            <Searchbox setexercise={setexercise} current_bodypart={current_bodypart} set_current_bodypart={set_current_bodypart}/>
            <Exercises exercise={exercise} setexercise={setexercise} current_bodypart={current_bodypart} />
         
        </Box>)
}

export default Home