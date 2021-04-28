# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

## Install
```
npm install -g ganache-cli
npm install .
```

## Testing
```
ganache-cli
cd eth-contracts
truffle test
```

## ZoKrates
```
docker run -v <path of project>:/home/zokrates/code -ti zokrates/zokrates /bin/bash
cd code/square
zokrates compile -i square.code
zokrates setup
zokrates compute-witness -a 3 9
zokrates generate-proof
zokrates export-verifier
```

## Deployment
![alt text](http://url/to/img.png)
![alt text](http://url/to/img.png)
![alt text](http://url/to/img.png)

## Contract Abi's
```
./eth-contracts/build/contracts
```

## Contract Addresses
https://rinkeby.etherscan.io/address/0x6e19e385b50b6893dad0e0f7241859773f384d2d

## OpenSea MarketPlace Storefront links
https://testnets.opensea.io/collection/unidentified-contract-fk8mbwnvxs

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
