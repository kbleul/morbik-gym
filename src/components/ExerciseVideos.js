
import { Box, Stack, Typography } from "@mui/material"


const ExerciseVideos = ({ exercise_videos, name }) => {

    if (!exercise_videos.length) return "Loading"

    return (<Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">

        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px" variant="h3">
            Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
        </Typography>

        <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '40px', xs: '0px' } }}
            justifyContent="flex-start" flexWrap="wrap" alignItems="center">

            {exercise_videos?.slice(0, 4).map((item, index) => (
                <a key={index}
                    className="exercise-video"
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target="_blank"
                    rel="noreferrer">
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                    <Box>
                        <Typography variant="h5" color="#000">
                            {item.video.title}
                        </Typography>
                        <Typography variant="h5" color="#000">
                            {item.video.channelName}
                        </Typography>
                    </Box>
                </a>
            ))}

        </Stack>

    </Box>)
}

export default ExerciseVideos