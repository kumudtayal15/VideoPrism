
import React ,{Component} from "react";
import Heading from "./Heading";
import Web3 from 'web3';
import Videostream from './build/contracts/Videostream.json'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Video from "./Video"
import {hash} from "./global";
// import {hash} from "./Heading.js"
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })


class App extends Component{
  async componentWillMount(){
    await this.load_data();
  }
  constructor(props){
    super(props);
    this.videouploading=this.videouploading.bind(this)
    this.captureFile=this.captureFile.bind(this);
    this.uploadVideo=this.uploadVideo.bind(this);
    this.donate = this.donate.bind(this);
    this.state={
      address:'',
      contract:null,
      account:null,
      videos_list:[],
      images_list:[],
      total_videos:0,
      total_images:0,
      buf:[],
      hash:"",
      title:"",
      videos_link:[],
      link:""
    };
  }
  async loadweb3() {
    console.log("Global variable : " + global.hash);
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
      }
      else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
      }
      else {
        window.alert('yes, Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
  }
  async load_data(){
    
    this.loadweb3();
    //loading account 
    const w3 = window.web3;
    const accounts = await w3.eth.getAccounts();
    const address = accounts[0];//accounts[0]:- to get first account
    this.setState({account:address})
  
    //loading smart contract and geting all the information
    const id=await w3.eth.net.getId(); /// getting the network id 
    const net_address=Videostream.networks[id].address;
    const videostream=new w3.eth.Contract(Videostream.abi,net_address);
    const total_videos=await videostream.methods.videos().call();
    const total_images=await videostream.methods.images().call();
    console.log(videostream)
    const v_list=[]
    const i_list=[]
    const videos_link=[];
    // for images list
    for(var j=0;j<=total_images;j++){
      const i=await videostream.methods.image_lists(j).call();
      i_list.push(i)
    }
    // for videos list 
    for(var i=0;i<total_videos;i++){
      const v=await videostream.methods.video_lists(i).call();
      v_list.push(v)
      videos_link.push(["https://ipfs.infura.io/ipfs/" + v.Hash,v.title,i]);
    }
    //setting the states
    this.setState({videos_list:v_list})
    this.setState({images_list:i_list})
    this.setState({address:address})
    this.setState({contract:videostream})
    this.setState({total_videos:total_videos})
    this.setState({total_images:total_images})
    this.setState({videos_link:videos_link})
    // console.log(total_videos);
    // console.log(videos_link[1]);
    // this.setState({link:videos_link[0]});
    
  }
  videouploading(){
    console.log("Uploading video on blockchain");
    console.log(this.state.hash)
    this.state.contract.methods.videouploading(this.state.hash,this.state.title).send({from:this.state.account});
  }

  // var buf = "";
  captureFile(event){
  console.log("capturing file")
  event.preventDefault();
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  // var buf = "";
  reader.onloadend=()=>{
    var buf = Buffer(reader.result);
    this.setState({buf:buf});
    console.log(buf);
    }
  }

  // var hash = "";
  async uploadVideo(title){
  // event.preventDefault();
  console.log("Uploading video")
  console.log(title);

  this.setState({title:title});
  console.log("Uploading to ipfs");
  try{
    var hash = await ipfs.add(this.state.buf);
    this.setState({hash:hash.path});
    console.log(this.state.hash);
    this.videouploading();
  }catch(e){
    console.log(e);
    }
  }
  donate(id){
    console.log(id);
    const price = window.web3.utils.toWei("1", 'Ether')
    this.state.contract.methods.donate(id).send({from:this.state.account,value: price });
  }

render(){
    //this.load_data();
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/Video" element={<Video />} />
          <Route path="/" element={<Heading donate = {this.donate} cF = {this.captureFile}uV= {this.uploadVideo} account={this.state.account} all_videos = {this.state.videos_link}/>} />
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;