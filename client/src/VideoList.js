// import React,{Component} from "react";
// import Modal from 'react-modal';
// import {Grid, Button} from "@material-ui/core";
// import { styled } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import {Paper} from "@material-ui/core";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


// const customStyles = {
// 	content :{
// 		flexGrow: 1,
//     	fontFamily: "'Pacifico'",
//     	fontSize: "3.0rem",
//     	color: "#000000"
// 	}
// }
// class VideoList extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state={
// 			li:""
// 		}
// 	}

// 	openVideo(){
// 		console.log(this.state.li);
// 		window.open(this.state.li,"Popup");
// 	}
// 	displayVideo(link){
// 		// this.setState({li:link});
// 		return(
// 			<div>
// 			<Grid item style = "background-color: #181818;" xs = {6}>
// 				 <video width = {400} src = {link[0]} controls></video> 
// 			</Grid>
// 			<Grid item style = "background-color: #000000;"xs = {6}>
// 				{link[1]} 
// 			</Grid>
// 			</div>
// 			);
// 	}


// 	render(){
// 		return(
// 		<div className="Video_List">
// 			<div class="Videos" style={{textAlign: "center"}}> 
// 			<Grid container rowSpacing ={7}>
// 			  {this.props.all_videos.map((link) => (
// 			  	<Grid item  xs = {3} style={{marginLeft: "20px", backgroundColor: "#212121", padding: "20px", marginBottom: "20px", borderRadius: "20px", textAlign: "center"}}>
// 				 <video height= "300px" width="300px" src = {link[0]} style={{borderRadius: "20px"}} controls></video>
// 				 <Button  style = {{
// 		flexGrow: 1,
//     	fontFamily: 'Ubuntu',
//     	fontSize: "1.5rem",
//     	color: "#FFFFFF",
//     	backgroundColor: "#3D3D3D",
//     	borderRadius: "20px",
//     	marginTop: "10px"}} >
//     	  <a href = {link[0]} target = "_blank" style={{textDecoration: "none", color: "#FFFFFF"}}>{link[1]}</a></Button>
// 				</Grid>
// 			  	))}
// 			</Grid>
				
// 			</div>
// 		</div>
// 		);
// 	}

// }

// export default VideoList;


import React,{Component} from "react";
import Modal from 'react-modal';
import {Grid, Button} from "@material-ui/core";
import { styled } from "@material-ui/core";
import { Link } from "react-router-dom";
import {Paper} from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const customStyles = {
	content :{
		flexGrow: 1,
    	fontFamily: "'Pacifico'",
    	fontSize: "3.0rem",
    	color: "#000000"
	}
}
class VideoList extends Component{
	constructor(props){
		super(props);
		this.state={
			li:""
		}
	}

	openVideo(){
		console.log(this.state.li);
		window.open(this.state.li,"Popup");
	}
	displayVideo(link){
		// this.setState({li:link});
		return(
			<div>
			<Grid item style = "background-color: #181818;" xs = {6}>
				 <video width = {400} src = {link[0]} controls></video> 
			</Grid>
			<Grid item style = "background-color: #000000;"xs = {6}>
				{link[1]} 
			</Grid>
			</div>
			);
	}


	render(){
		return(
		<div className="Video_List">
			<div class="Videos" style={{textAlign: "center"}}> 
			<Grid container rowSpacing ={7}>
			  {this.props.all_videos.map((link) => (
			  	<Grid item  xs = {3} style={{marginLeft: "20px", backgroundColor: "#212121", padding: "20px", marginBottom: "20px", borderRadius: "20px", textAlign: "center"}}>
				 <video height= "300px" width="300px" src = {link[0]} style={{borderRadius: "20px"}} controls></video>
				 <Button style = {{
		flexGrow: 1,
    	fontFamily: 'Ubuntu',
    	fontSize: "1.5rem",
    	color: "#FFFFFF",
    	backgroundColor: "#3D3D3D",
    	borderRadius: "20px",
    	marginTop: "10px"}} >
    	  <a href = {link[0]} target = "_blank" style={{textDecoration: "none", color: "#FFFFFF"}}>{link[1]}</a></Button>
    	  &emsp;&emsp;
    	  <Button type="submit" onClick={() => { this.props.donate(link[2]) }} style = {{
		flexGrow: 1,
    	fontFamily: 'Ubuntu',
    	fontSize: "1.5rem",
    	color: "#FFFFFF",
    	backgroundColor: "#ff6961",
    	borderRadius: "20px",
    	marginTop: "10px"}} > Donate </Button>
				</Grid>
			  	))}
			</Grid>
				
			</div>
		</div>
		);
	}

}

export default VideoList;