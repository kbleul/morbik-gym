
import { Box, Stack, Typography } from "@mui/material"
import { useTheme } from "../utils/themeContex"


const ExerciseVideos = ({ exercise_videos, name }) => {

    const theme = useTheme()

    if (!exercise_videos.length) return "Loading"

    return (<Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">

        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color={theme === "light" ? "#000" : "#fff"} mb="33px" ml="5%" variant="h3">
            Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
        </Typography>

        <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '40px', xs: '0px' } }}
            justifyContent="flex-start" flexWrap="wrap" alignItems="center" margin="0 0 0 5%">

            {exercise_videos?.slice(0, 4).map((item, index) => (
                <a key={index}
                    className="exercise-video"
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target="_blank"
                    rel="noreferrer">
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                    <Box>
                        <Typography sx={{ fontSize: { lg: '16px', xs: '12px' } }} color={theme === "light" ? "#000" : "#fff"} height= "3rem" overflow="hidden">
                            {item.video.title}
                        </Typography>
                        <Typography sx={{ fontSize: { lg: '13px', xs: '10px' } , fontWeight : "bold" , textAlign : "right"}} color={theme === "light" ? "#000" : "yellow"} borderBottom={theme === "light" ? "#000" :"1px solid yellow"}>
                            {"- " + item.video.channelName}
                        </Typography>
                    </Box>
                </a>
            ))}

        </Stack>

    </Box>)
}

export default ExerciseVideos