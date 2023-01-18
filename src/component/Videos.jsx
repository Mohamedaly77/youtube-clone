import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard } from './';

const Videos = ({ videos }) => {
  return (
    <Stack
      direction={'row'}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos?.map((item, idx) => (
        <Box key={idx}>{item.id.videoId && <VideoCard video={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
