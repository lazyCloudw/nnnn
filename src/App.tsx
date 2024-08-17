import React from 'react';
import { AppBar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, Grid, IconButton, List, ListItemButton, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TelegramIcon from '@mui/icons-material/Telegram';
import Contents from './component/contents.tsx';
import Seller from "./component/seller.tsx"
// import axios from "axios";


const drawerWidth = 150;
const data = require("./json/data.json");
const sellData = require("./json/sellData.json");

// eslint-disable-next-line
type jsonType = {
  no: string
  img_url: string
  dl_url: string
}

type selljsonType = {
  no: string
  img_url: string
  vid_url: string
  dl_url: string
  exp?: string
}

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const UA = window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches;
  const [sellScreen , setSellScreen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [jsonData, setJsonData] = React.useState<jsonType[]>([]);
  const [jsonSellData, setJsonSellData] = React.useState<selljsonType[]>([]);

  const fetchData = async () => {
    const data = await fetch('https://raw.githubusercontent.com/lazyCloudw/nnnn/develop/src/json/data.json').then((response) => response.json())
    // console.log("jsonData", data);
    setJsonData(data);

    const selldata = await fetch('https://raw.githubusercontent.com/lazyCloudw/nnnn/develop/src/json/sellData.json').then((response) => response.json())
    // console.log("selldata", selldata);
    setJsonSellData(selldata);
  }

  React.useEffect(
    () => {
        let url = new URL(window.location.href);
        let params = url.searchParams;
        if(params.get('mode') === "seller") {
          setSellScreen(true);
        }
        
        fetchData();
    },[]
  );

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="sticky" sx={{ backgroundColor:"#483d8b" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Number
          </Typography>
          <Box sx={{ flexGrow: 0 }} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            disabled
            onClick={() => window.open("https://t.me/fffxffxfff")}
          >
            <TelegramIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            paddingTop: 0,
            width: drawerWidth,
          },
        }}
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={() => {
          setMobileOpen(false)
        }}
      >
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItemButton href='https://katfile.com/free335061.html'>
              <Typography fontWeight={"bold"}>Katfile</Typography>
            </ListItemButton>
            <ListItemButton href='https://www.kshared.com/aff/2ejlWXgPL4'>
              <Typography fontWeight={"bold"}>Kshared</Typography>
            </ListItemButton>
            <ListItemButton href='https://fikper.com/vzZ9snmkx5/register'>
              <Typography fontWeight={"bold"}>Fikper</Typography>
            </ListItemButton>
            <ListItemButton href='https://fileland.io/premium2539.html'>
              <Typography fontWeight={"bold"}>Fileland</Typography>
            </ListItemButton>
            {/* <ListItemButton href='https://filesfly.cc/free71720.html'>
              <Typography fontWeight={"bold"}>Filesfly</Typography>
            </ListItemButton> */}
            <ListItemButton onClick={() => {setSellScreen(!sellScreen); setMobileOpen(false)}}>
              <ListItemText primary={sellScreen ? "🏠TOP" : "👑VIP"} />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Box sx={{ mt: 0 }}/>
      <a href="https://info.flagcounter.com/Bawc">
        <img src="https://s11.flagcounter.com/count2/Bawc/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" style={{display: "none"}}/>
      </a>
      <Button variant='contained' onClick={() => setSellScreen(true)} sx={{ m: 1, p: 2, mb: -2, fontWeight: "bold", borderRadius: 3, backgroundColor: "#483d8b", display: sellScreen ? "none" : "block" }}>👑VIP</Button>
      { !sellScreen && jsonData && (
          <Grid container spacing={1}>
            {
              jsonData.map((data: jsonType) => {
                return (
                  <Grid item xs={UA ? 12 : 6} key={data.no}>
                    <Contents title={data.no} img={data.img_url} dl={data.dl_url}/>
                  </Grid> 
                );
              })
            }
          </Grid>
        ) 
      }
      { sellScreen && jsonSellData && (
        <Grid container spacing={1}>
          <Button variant='contained' onClick={() => handleClickOpen()} sx={{ m: 2, p: 2, mb: -2, fontWeight: "bold", borderRadius: 8, backgroundColor: "#228b22" }}>How to Charge</Button>
        {
          jsonSellData.map((data: selljsonType) => {
            return (
              <Grid item xs={12} key={data.no}>
                <Seller title={data.no} img={data.img_url} vid={data.vid_url} dl={data.dl_url} exp={data.exp}/>
              </Grid> 
            )
          })
        }
        </Grid>
        ) 
      }
      {
        !jsonData && !jsonSellData && (
          <Typography>no data</Typography>
        )
      }

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"How to add Fund"}
        </DialogTitle>
        <DialogContent>
          <Stack direction={"column"} sx={{ m: 0 }} spacing={2}>
            <Box>Register via the <a href='https://fileland.io/premium2539.html'>Link</a></Box>
            <Box><img src={"./img/how001.PNG"} style={{width: '70%', height: '70%'}} loading="lazy"/></Box>
            <Box><img src={"./img/how002.PNG"} style={{width: '70%', height: '70%'}} loading="lazy"/></Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default App;
