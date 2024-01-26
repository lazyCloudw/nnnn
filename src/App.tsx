import React from 'react';
import { AppBar, Box, Button, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Contents from './component/contents.tsx';
import Seller from "./component/seller.tsx"


const drawerWidth = 150;
const data = require("./json/data.json");
const sellData = require("./json/sellData.json");

type jsonType = {
  no: string
  img_url: string
  dl_url: string
}

type selljsonType = {
  no: string
  img_url: string
  vid_url: string
  exp?: string
}

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const UA = window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches;
  const [sellScreen , setSellScreen] = React.useState(false);

  React.useEffect(
    () => {
        let url = new URL(window.location.href);
        let params = url.searchParams;
        if(params.get('mode') === "seller") {
          setSellScreen(true);
        }
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
            <ListItemButton onClick={() => {setSellScreen(!sellScreen); setMobileOpen(false)}}>
              <ListItemText primary={sellScreen ? "TOP" : "🔞🔞🔞"} />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Box sx={{ mt: 0 }}/>
      <a href="https://info.flagcounter.com/Bawc">
        <img src="https://s11.flagcounter.com/count2/Bawc/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" style={{display: "none"}}/>
      </a>
      { !sellScreen && (
        <Grid container spacing={1}>
          {
            data.map((data: jsonType) => {
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
      { sellScreen && (
        <Grid container spacing={1}>
        {
          sellData.map((data: selljsonType) => {
            return (
              <Grid item xs={12} key={data.no}>
                <Seller title={data.no} img={data.img_url} vid={data.vid_url} exp={data.exp}/>
              </Grid> 
            )
          })
        }
        </Grid>
        ) 
      }
    </Box>
  );
}

export default App;
