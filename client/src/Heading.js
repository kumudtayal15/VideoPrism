import React from "react";
import Modal from 'react-modal';
import VideoList from "./VideoList";
import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  Box,
  Drawer,
  IconButton,
  List, 
  ListItem , ListItemText , ListItemIcon , Divider,
} from "@material-ui/core";
import { makeStyles,Grid} from "@material-ui/core";
import {useState} from "react";
import { BookmarkBorderOutlined, BorderAllOutlined, Mail as MailIcon, PersonAddOutlined, PublishOutlined, Router } from "@material-ui/icons";
import {Inbox as InboxIcon} from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import {useLocation, useNavigate } from "react-router-dom";


var title = ""
function gTitle(event){
  event.preventDefault();
  title = event.target.value;
  console.log(title)
}
const useStyles = makeStyles((theme) => ({
  
  title: {
    flexGrow: 1,
    fontFamily: "'Pacifico', cursive",
    fontSize: "3.0rem",
    color: "#B3B3B3"
  },
  main: {
    backgroundColor: "#282828",
    padding: "15px",
    zIndex: theme.zIndex.drawer + 1,
    height : "120px"
  },

  drawer: {
    width: 240,
    flexShrink: 0,
    color: "white",
    fontFamily: "'Pacifico', cursive",
    fontSize: "2.2rem",
    // backgroundColor: "#282828" ,
  },
  
  drawerPaper: {
    width: "260px",
    color: "white",
    fontFamily: "'Pacifico', cursive",
    fontSize: "2.2rem",
    backgroundColor: "#282828", //target here
    borderRadius: "15px",
    paddingTop:64,
   
  },

  root:{
    
    display :'flex',
  },

  listItemText:{
    fontSize:'0.5em',
    fontFamily: 'georgia'
  }
}));

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 15,
    border: '3px solid black'
  },

  
};

function Heading(props) {

  let subtitle;
  const classes = useStyles();
  const [modalIsOpen1, setIsOpen1] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);

  function openModal1() {
    setIsOpen1(true);
    setIsOpen2(false);
  }

  function openModal2() {
    setIsOpen2(true);
    setIsOpen1(false);
  }

  function openModal3() {
    alert("NO TRENDING VIDEOS AVAILABLE");
    setIsOpen1(false);
    setIsOpen2(false);
  }


  function afterOpenModal() {
    // references are now sync'd and can be accessed.

    subtitle.style.color = 'black';
  }

  function closeModal1() {
    setIsOpen1(false);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  const menuItems =[
    {
      text : 'LOG IN',
      icon : <PersonAddOutlined style={{color :'white' , fontSize:45}}></PersonAddOutlined>,
      func : openModal1
    },

    {
      text : 'UPLOAD VIDEO',
      icon : <PublishOutlined style={{color :'white', fontSize:45}}></PublishOutlined>,
      func : openModal2
    },
    {
      text : 'TRENDING VIDEOS',
      icon : <BookmarkBorderOutlined style={{color :'white', fontSize:45}}></BookmarkBorderOutlined>,
      func : openModal3
    }
  ]

  
  return (
    // <BrowserRouter>
    <div>
    <Container className={classes.root}>
    <Drawer
        variant="permanent"
        anchor = "right"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        
        <List>
          {menuItems.map(item => (
            <><ListItem button key={item.text} onClick={item.func} >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText  classes={{primary:classes.listItemText}} primary={item.text} />
            </ListItem><br></br></>
          ))}
        </List>
        <Divider />
        
    </Drawer>
    <Modal
        isOpen={modalIsOpen1}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal1}
        style={customStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} >LOGIN</h2>
        <form>  
        <div class="container">   
            <label>Username : </label> 
            <input type="text" placeholder="Enter Username" name="username" required/>  <br/><br/>
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>  <br/><br/> &emsp;&emsp;&emsp;&emsp;
            <input type="checkbox" /> Remember me   <br/><br/>&emsp;&emsp;&emsp;
            <button type="submit">Login</button>   &emsp;&emsp;
            
            <button type="button" onClick={closeModal1} class="cancelbtn"> Cancel</button>   <br/><br/>
            
            Forgot <a href="#"> password? </a>   <br/><br/>
        </div>   
        </form> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;    
      </Modal>

      <Modal
        isOpen={modalIsOpen2}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal2}
        style={customStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} align='center'>UPLOAD VIDEO</h2><br/>
        <form onSubmit={(event)=>{
          event.preventDefault();
          // console.log(title);
          // var title = event.target.;
          props.uV(title);
        }}>
              &nbsp;
              &emsp;&emsp;<input type='file' accept=".mp4, .mkv .ogg .wmv" onChange = {props.cF} style={{ width: '250px' }} />
                <div className="form-group mr-sm-2"><br/> &emsp;&emsp;&emsp;
                  <input
                    id="vT"
                    type="text"
                    onChange = {gTitle}
                    className="form-control-sm"
                    placeholder="Video Title"
                    required /><br/> &emsp;&emsp;&emsp;&emsp;
                </div>&emsp;&emsp;&emsp;&nbsp;&nbsp;
              <button type="submit" className="btn btn-danger btn-block btn-sm">Upload</button>  &emsp;&emsp;
              <button onClick={closeModal2}>Close</button>
            </form>
      </Modal>
      
      <AppBar position="fixed" className={classes.main}>
      
      <Toolbar>
      <span
      className="fas fa-icons fa-3x"
      style={{
      color: "#B0B3B8",
      marginLeft: "10px",
      marginRight: "15px"
      }}
      ></span>
       <Typography variant="h6" className={classes.title}>
         VideoPrism 
       </Typography>
       <p style = {{
      fontFamily: 'Ubuntu',
      fontSize: "1rem",
      color: "#FFFFFF",
      backgroundColor: "#3D3D3D",
      marginTop: "10px",
      align : "right"
       }}> Welcome, {props.account}</p>
      </Toolbar>
      </AppBar>
      
    </Container>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <VideoList all_videos = {props.all_videos} donate = {props.donate}/>
    </div>
    
)};



export default Heading;