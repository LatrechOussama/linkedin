import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { textAlign } from '@mui/system';
// const element = <FontAwesomeIcon icon={faCoffee} />
import SmsIcon from '@mui/icons-material/Sms';
import AppsIcon from '@mui/icons-material/Apps';
import { height } from '@mui/system';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(5),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <HomeIcon
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </HomeIcon>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{boxShadow:' var(--bs-sm)'
       
   }} >
        <Toolbar style={{backgroundColor:'white',  position: 'absolute', 
    top: "0px",
    right: "0px", height:'10%' , width:'120%' }}>
          <IconButton style={{marginRight:'500px' , marginLeft:'-100px'}}
            size="large"
            // edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
         <LinkedInIcon style={{color:'#0A66C2', fontSize:50}}/>
          <Search style={{backgroundColor:'gray', marginLeft:'1px',marginRight:'100px'}}>
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }}  />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} gap={6} style={{marginRight:'100px',color:'gray'}}>
            
            
            <div style={{display:'block',justifyContent:'center'}}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  color="error">
                <HomeIcon />
                </Badge>
            </IconButton>
            <p style={{ fontSize :'14px', marginTop:'1px'}}>Accueil</p>
           </div>
          
           <div style={{display:'block',justifyContent:'center'}}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  color="error">
              <PeopleIcon/>
                
              </Badge>
            </IconButton>
            <p style={{ fontSize :'14px', marginTop:'1px'}}>reseau</p>
            </div>
           
           
            <div style={{display:'block',justifyContent:'center'}}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  color="error">
              <BusinessCenterIcon/>
                
              </Badge>
            </IconButton>
            <p style={{ fontSize :'14px' , marginTop:'1px'}}>emplois</p>
            </div>
            
            <div style={{display:'block',justifyContent:'center'}}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit" >
              <Badge  color="error">
              <SmsIcon/>
               
              </Badge>
            </IconButton>
         <p style={{ fontSize :'14px', marginTop:'1px'}}>Messagerie</p>
         </div>


            {/* <div style={{display:' inline Flex', width: "25px", height:"200px" ,marginTop:'100px'}}>
  <hr style={{margin:" 0px 0px 0px 12.5px"}}/>
</div>   */}
<div style={{display:'block',justifyContent:'center'}}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit" >
              <Badge  color="error">
              <NotificationsIcon/>
               
              </Badge>
            </IconButton>
         <p style={{ fontSize :'14px', marginTop:'1px'}}>Notifications</p>
         </div>



         <div style={{display:'block',justifyContent:'center',marginRight:'50px'}}>
            <IconButton
              size="large"
              // edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              
            >
              <AccountCircle />
              
            </IconButton>
            <p style={{ fontSize :'14px', marginTop:'1px'}}>Vous</p>
         </div>
         
          </Box>


          <hr
        style={{
            color: 'gray',
            backgroundColor: 'gray',
            height: 100,
            marginRight:50,
            marginLeft:-100
        }}
    />
    <div style={{display:'block',justifyContent:'center',marginRight:'50px'}}>
    <IconButton size="large" aria-label="show 4 new mails" color="inherit" style={{display:'block',marginLeft:'20px'}}>
              <Badge  color="error">
              <AppsIcon style={{ color:'gray' , marginRight:'25px'}}/>
                
              </Badge>
            </IconButton>
            <p style={{ fontSize :'14px', marginTop:'1px',color:'gray'}}>produits</p>
             </div>         
            <p style={{color:'gray'}}>Essayez Premium <br/>Gratuitement</p>
         
         
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >


               
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );

}