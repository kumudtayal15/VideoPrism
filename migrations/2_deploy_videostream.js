var videostream = artifacts.require("./Videostream.sol");

module.exports = function(deployer) {
  deployer.deploy(videostream);
};