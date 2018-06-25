//Biblioteca de criptografia 
const SHA256 = require('crypto-js/sha256');

// Inicializamos o bloco
class Block {
    //Declaramos os 4 tipos de dados que um bloco possui
    //=> ["index, timestamp, data, previousHash"]
    //e definimos o previousHash como vazio por default.
    constructor(index, timestamp, data, previousHash = ''){
        //é o valor que representa sua posição dentro da chain.
        this.index = index;
        //Qual a data  de sua criação
        this.timestamp = timestamp;
        //Guarda o registro sobre os pontos de transação (sender & client)
        this.data = data;
        //
        //Importante para manter a integridade da chain inteira.
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

console.log('Essa blockchain é válida?' + gbCoin.ischainValid());


// Definindo quantidade no primeiro bloco da chain.
gbCoin.chain[1].data = (amount: 100);
gbCoin.chain[1].hash = gbCoin.chain[1].calculateHash();
// console.log(JSON.stringify(gbCoin, null, 4));

console.log('Essa blockchain é válida?' + gbCoin.ischainValid());