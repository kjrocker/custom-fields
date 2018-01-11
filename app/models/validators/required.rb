class Required < Validation
  def is_valid?(value)
    Validation::Result.new(value, value.present?)
  end
end
