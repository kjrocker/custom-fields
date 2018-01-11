class Validation::Result
  attr_reader :value, :is_valid

  def new(value, is_valid)
    @value = value
    @is_valid = is_valid
  end
end
