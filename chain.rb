class Block
	def initialize(index, timestamp, data, previousHash = '') # Init first block
		self.index = index;
    self.timestamp = timestamp;
    self.data = data;
    self.previousHash = previousHash;
    self.hash = self.calculateHash();
	end

	def calculateHash()
		# return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
	end 
end 
block = Block.new(0,0,0,0)