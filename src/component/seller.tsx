import { Box, Button, Card, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

type Props = {
  title: string,
  img: string,
  vid: string,
  exp?: string
};

export default function Seller({title, img, vid, exp}: Props) {
  return(
    <Paper sx={{width: 'auto', mb: -2}} elevation={2}>
      <Typography variant='h5' sx={{m: 2, pt: 1}} fontWeight={"bold"}>NVM{title}</Typography>
      <Box sx={{ width: '90%', height: '90%', m: 2}}>
        <img src={img} style={{width: '90%', height: '90%'}} loading="lazy"/>  
      </Box>
      <Typography sx={{m: 0, mb: 2, ml: 4}} fontSize={"20px"}>{exp}</Typography>
      <Typography sx={{m: 0, pt: 0, ml: 4}} fontSize={"18px"}>LiteCoin(LTC): LP1SYW7Nt8Kv5pTaviXcYo4j7che1DCwxS</Typography>
      <Typography sx={{m: 0, pt: 0, ml: 4}} fontSize={"18px"}>Ripple(XRP): rUcvd4XEHddHBEQE4ohXwHAJn9GWKTsaZH</Typography>
      <Typography sx={{m: 0, pt: 0, ml: 4}} fontSize={"18px"}>Monero(XMR): 47XXXhGi9HqG5tUYuDWVmYP9ZtkAE2YCSf1xct1ULb4k7DADxh2czvgBaLvvPMQWZ68zYSmTEKbwRRqhERD5KxEn7CTr7qF</Typography>
      <Typography sx={{m: 0, mt: 2, ml: 4}} fontSize={"16px"}>If you wish to purchase, please send to Telegram</Typography>
      <Stack direction={"row"} sx={{ m: 2 }}>
        <Button variant='contained' sx={{ m: 2, borderRadius: 11, backgroundColor: "#2f4f4f" }} href={"https://t.me/fffxffxfff"}>
          SEND PM
        </Button>
        <Typography sx={{ mt: 2.5, ml: 2 }} fontSize={"20px"} fontWeight={"bold"}>$ 8</Typography>
        <Button variant='outlined' sx={{ m: 2, borderRadius: 11, ml: 20}} href={vid}>
          <VideoLibraryIcon sx={{ ml: -0.5 }}/>
        </Button>
      </Stack>
    </Paper>
  );
}