class Block
	
	def self.index(index)
		p "debug ok"
		@index
	end

	def self.add_timestamps
		@timestamp = Time.now
	end
	
  def self.count
    @count ||= 0
  end

  def self.count=(increment)
    @count = increment
  end

  def initialize(name)
    @name = name
    self.class.count += 1
  end

  def name
    @name
  end

	def initialize(index, timestamp, data, previousHash = '') # Init first block
		@index = index;
    @timestamp = timestamp;
    data = data;
    previousHash = previousHash;
    hash = self.calculateHash();
	end

	def calculateHash()
		# return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
	end 
end 
block = Block.new(0,0,0,0)