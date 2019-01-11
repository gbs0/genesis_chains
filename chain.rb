class Block
	def initialize(index, timestamp, data, previousHash = '') # Init first block
		self.index = index;
    self.timestamp = timestamp;
    self.data = data;
    self.previousHash = previousHash;
    self.hash = self.calculateHash();
	end 
end 