import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exercise_options, fetchData } from "../utils/fetchData";
import ExersiceCard from "./ExersiceCard";

import { useTheme } from "../utils/themeContex";
import Loader from "../assets/images/loader.gif"

const Exercises = ({ exercise, setexercise, current_bodypart }) => {

  const theme = useTheme();

  const [currentpage, set_currentpage] = useState(1);
  const exercises_perpage = 9;

  const indeOf_lastExercise = currentpage * exercises_perpage;
  const indexOf_firstExercise = indeOf_lastExercise - exercises_perpage;

  console.log(exercise)
  const currentExercises = exercise.length === 0 ? [] : exercise.slice(
    indexOf_firstExercise,
    indeOf_lastExercise
  );

   

  useEffect(() => {
    const fetch_exercises = async () => {
      let response = [];

      if (current_bodypart === "all") {
        response = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exercise_options
        );
      } else {
        response = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${current_bodypart}`,
          exercise_options
        );
      }
      setexercise(response);
    };

    fetch_exercises();
  }, [current_bodypart]);

  const paginateSection = (e, value) => {
    set_currentpage(value);
    window.scrollTo({ top: 1700, behaviour: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          fontSize: { lg: "35px", xs: "30px" },
          color: theme === "light" ? "#000" : "#fff",
        }}
        mb="46px"
        ml="4%"
      >
        Showing Results
      </Typography>


      { currentExercises.length === 0 ? 
          <div className="loading_container">
            <img src={Loader} alt="loading" />
          </div> :
            <Stack
              direction="row"
              sx={{ gap: { lg: "20px", xs: "50px" } }}
              flexWrap="wrap"
              justifyContent="center"
            >
              {
                currentExercises.map((item, index) => (
                <ExersiceCard key={index} exercise={item} />
              ))}
            </Stack>
      }
      <Stack
        mt="100px"
        alignItems="center"
        backgroundColor={theme === "light" ? "#fff" : "#3e3e3e"}
      >
        {exercise.length > 9 && (
          <Pagination
            style={{ color: "yellow" }}
            color="secondary"
            shape="rounded"
            className= {theme === "light" ? "pagnation_items" : "pagnation_items--dark"}
            
            defaultPage={1}
            count={Math.ceil(exercise.length / exercises_perpage)}
            page={currentpage}
            onChange={paginateSection}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
