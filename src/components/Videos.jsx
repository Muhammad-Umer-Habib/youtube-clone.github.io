import React from 'react'
import { Stack, Box, CircularProgress } from '@mui/material'
import { VideoCard, ChannelCard } from './index'

const Videos = ({ videos, direction }) => {

    if (!videos?.length) return <CircularProgress justifyContent="center" size={1.5} />
    // console.log(videos)
    return (
        <Stack
            direction={direction || "row"}
            flexWrap="wrap"
            justifyContent="start"
            gap={2}

        >
            {
                videos.map((item, index) => (
                    <Box key={index}>
                        {
                            item.id.videoId && <VideoCard video={item} />
                        }
                        {
                            item.id.channelId && <ChannelCard channelDetail={item} />
                        }

                    </Box>
                ))
            }
        </Stack>
    )
}

export default Videos