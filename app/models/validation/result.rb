class Validation::Result
  attr_reader :value, :is_valid

  def new(value, is_valid, message_generator)
    @value = value
    @is_valid = is_valid
    @text = message_generator.process
  end
end
