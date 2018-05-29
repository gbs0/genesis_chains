const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0, "08s/03/2018", "GenesisBlock", "0");
    }
    
    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }
    
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

	ischainValid(){
		for(let i = 1; < this.chain.length; i++){
			const currentBlock = this.chain[i];
			const.previousBlock = this.chain[i - 1];

			if(currentBlock.hash !== currentBlock. calculateHash()){
				return false;
			}

			if(currentBlock.previousHash !== previousBlock.hash){
				return false;
			}

		}

		return true;
	}
}

let gbCoin = new Blockchain();
gbCoin.addBlock(new.Blockchain(1, "08/03/2018", {amount: 4}));
gbCoin.addBlock(new.Blockchain(2, "31/03/2018", {amount: 10}));

console.log('Is blockchain valid?' + gbCoin.ischainValid());

// console.log(JSON.stringify(gbCoin, null, 4));

