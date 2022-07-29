
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

const HorizontalScrollbar = ({ current_bodypart ,set_current_bodypart, bodyparts , isbodypart }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {bodyparts.map(item => {
                return <Box key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >

                 { isbodypart ?  
                    <Bodypart item={item} current_bodypart={current_bodypart} set_current_bodypart={set_current_bodypart}/>
                  : <ExerciseCard exercise={item} />  
                }
                </Box>

            })}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar