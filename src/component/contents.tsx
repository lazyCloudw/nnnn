import { Box, Button, Card, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';

type Props = {
  title: string,
  img: string,
  dl: string
};

export default function Contents({title, img, dl}: Props) {
  return(
    <Paper sx={{width: 'auto', mb: -2}} elevation={2}>
      <Typography variant='h5' sx={{m: 2, pt: 1}} fontWeight={"bold"}>Number{title}</Typography>
      <Box sx={{ width: '90%', height: '90%', m: 2}}>
        <img src={img} style={{width: '90%', height: '90%'}} loading="lazy" onClick={() => window.open(img)}/>  
      </Box>
      <Stack direction={"row"}>
        <Button variant='contained' sx={{ m: 2, borderRadius: 11, backgroundColor: "#2f4f4f" }} href={dl}>
          <DownloadIcon sx={{ ml: -0.5 }}/>
          Download
        </Button>
        <Typography sx={{ mt: 3 }}>zipPass: number</Typography>
      </Stack>

    </Paper>
  );
}