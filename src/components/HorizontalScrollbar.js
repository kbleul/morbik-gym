
import {useContext} from "react"
import { Box , Typography } from "@mui/material"
import Bodypart from "./Bodypart"
import  { ScrollMenu , VisibilityContext } from "react-horizontal-scrolling-menu"

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

import ExerciseCard from "../components/ExersiceCard"



const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };


  const HorizontalScrollbar = ({ current_bodypart ,set_current_bodypart, bodyparts , isbodypart , set_targetmuscle_exe,  set_equipmentexe}) => {


    return (<article>
       { 
       isbodypart ? 
       <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} className="scroll_arrows_container">
            {bodyparts.map(item => {
                return <Box key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                   className="bodypart_box"
                >

                 { isbodypart && 
                    <Bodypart item={item} current_bodypart={current_bodypart} set_current_bodypart={set_current_bodypart}/> 
                }
                </Box>

            })}
        </ScrollMenu>

        : <section className="similar_container">
        {bodyparts.map(item => {
          return <Box className="similar_container-div" key={item.id || item}
              itemId={item.id || item}
              title={item.id || item}
              sx={{ margin: {lg: "o 40px" , sx : "0 1px"} }} 
          >
        <ExerciseCard exercise={item} set_targetmuscle_exe={set_targetmuscle_exe} set_equipmentexe={set_equipmentexe}/> 
        </Box>

         } )}
         </section>
      }
      </article>
    )
}

export default HorizontalScrollbar