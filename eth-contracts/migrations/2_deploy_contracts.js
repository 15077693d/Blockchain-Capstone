// migrating the appropriate contracts
var RealEstate = artifacts.require("./RealEstate");
var SquareVerifier = artifacts.require("./SquareVerifier");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier");

module.exports = function (deployer) {
    deployer.deploy(RealEstate);
    deployer.deploy(SquareVerifier)
        .then(() => {
            return deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
        });
};