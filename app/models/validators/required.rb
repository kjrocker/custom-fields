class Required < Validation
  def is_valid?(value)
    Validation::Result.new(value, value.present?, MessageGenerator)
  end

  class MessageGenerator
    def self.process(value)
      "This field is required"
    end
  end
end
