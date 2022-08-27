pragma solidity >=0.4.21 <0.7.0;

contract Videostream {
    uint public videos=0;
    uint public images=0;
    
    struct Images{
        string title;
        address payable author_add;
        string Hash;
        uint likes;
        uint dislikes;
    }

    struct Video{
        string title;
        address payable author_add;
        string Hash;
        uint likes;
        uint dislikes;
    }
    mapping(uint=>Video) public video_lists;
    mapping(uint=>Images) public image_lists;

    function videouploading(string memory video_hash,string memory title) public {
        video_lists[videos]= Video(title,msg.sender,video_hash,0,0);
        videos+=1;
    }
    function imageuploading(string memory image_hash,string memory title) public {
        image_lists[videos]= Images(title,msg.sender,image_hash,0,0);
        images+=1;
    }
    function donate(uint video_number) public payable {
        Video memory v=video_lists[video_number] ;
        address payable owner=v.author_add;
        address(owner).transfer(msg.value);
    }
}