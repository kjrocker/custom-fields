class Required < Validation
  def is_valid?(value)
    value.present?
  end
end
