const GiveNTake = artifacts.require("GiveNTake");

module.exports = function(deployer) {
  deployer.deploy(GiveNTake);
};