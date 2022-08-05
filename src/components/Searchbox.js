import { useState, useEffect } from "react";
import { Box, TextField, Stack, Typography, Button } from "@mui/material";
import { exercise_options, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

import Loader from "../assets/images/loader.gif"

import { useTheme } from "../utils/themeContex";

const Searchbox = ({ setexercise, current_bodypart, set_current_bodypart }) => {
  const [search, setsearch] = useState("");
  const [bodypart_options, set_bodypart_options] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchbody_catagories = async () => {
      const response = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exercise_options
      );

        set_bodypart_options(["all", ...response]);
    };

    fetchbody_catagories();
  }, []);

  const handleSearch = async () => {

     setexercise([])
     window.scrollTo(0,1630);


    if (search) {
      const exersise_data = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exercise_options
      );


      const searched_exercises = exersise_data.filter(
        (exersise) =>
          exersise.name.toLowerCase().includes(search) ||
          exersise.target.toLowerCase().includes(search) ||
          exersise.equipment.toLowerCase().includes(search) ||
          exersise.bodyPart.toLowerCase().includes(search)
      );


      setsearch("");
      searched_exercises.length === 0 ? setexercise(["null"]) : setexercise(searched_exercises);

    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">

      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
        color={theme === "light" ? "#000" : "#fff"}
      >
        Awesome Exersises you <br /> should know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: theme === "light" ? "1px solid #fff" : "1px solid gray",
              borderRadius: "4px",
              color: theme === "light" ? "gray" : "white"
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: theme === "light" ? "#fff" : "gray",
            borderRadius: "40px",
            
          }}
          height="76px"
          value={search}
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
          placeholder="Search Exersises"
          type="text"
        ></TextField>

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "57px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={() => handleSearch()}
        >
          Search
        </Button>
      </Box>

      {bodypart_options.length > 0 ? <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
      
        <HorizontalScrollbar
          current_bodypart={current_bodypart}
          set_current_bodypart={set_current_bodypart}
          bodyparts={bodypart_options}
          isbodypart
        />
      
      </Box>

      : <div>
          <img src={Loader} alt="loading" />
      </div>
      

        }
    </Stack>
  );
};

export default Searchbox;
