import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {text: 'Home', icon:  <HomeIcon />, link: '/' },
          {text: 'Portfolio', icon:  <EngineeringIcon />, link: '/Portfolio' },
          {text: 'Resume', icon:  <PermIdentityIcon />, link: '/Resume' },
          {text: 'Contact', icon:  <ConnectWithoutContactIcon />, link: '/Contact' }
        ].map((item, index) => (
          <ListItem key={index} disablePadding component={Link} to={item.link}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          {text: 'LinkedIn', icon:  <LinkedInIcon />, link: 'https://www.linkedin.com/in/tisha-anderson/' },
          {text: 'Github', icon:  <GitHubIcon />, link: 'https://github.com/tishaanderson' },
          {text: 'Instagram', icon:  <InstagramIcon />, link: 'https://www.instagram.com/curlyqtish/' }
        ].map((item, index) => (
          <ListItem key={index} disablePadding component={Link} to={item.link}>
            <ListItemButton>
            <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className='button-color' onClick={toggleDrawer(anchor, true)} startIcon={<MenuIcon style={{color: '16275b'}} />}></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Navbar;