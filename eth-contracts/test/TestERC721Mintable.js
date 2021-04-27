var ERC721MintableComplete = artifacts.require('Siu4');

contract('TestERC721Mintable', accounts => {

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: accounts[0]});

            // TODO: mint multiple tokens
            for (let i=0; i<5;i++){
                this.contract.mint(accounts[i], i)
            }
            this.contract.mint(accounts[0], 5)
        })

        it('should return total supply', async function () { 
            const actual = await this.contract.totalSupply()
            assert.equal(actual.toNumber(), 6)
        })

        it('should get token balance', async function () { 
            const actual = await this.contract.balanceOf(accounts[0])
            assert.equal(actual.toNumber(), 2)
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            const actual = await this.contract.getTokenURI(5)
            assert.equal(actual, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/5")
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.approve(accounts[0],2,{from:accounts[0]})
            await this.contract.transferFrom(accounts[2], accounts[0], 2,{from:accounts[2]})
            const actual = await this.contract.balanceOf(accounts[0])
            assert.equal(actual.toNumber(), 3)
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: accounts[0]});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            
        })

        it('should return contract owner', async function () { 
            
        })

    });
})