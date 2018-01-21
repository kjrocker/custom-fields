class Required < Validation
  def is_valid(value)
    if value.present? then :valid else :invalid end
  end
end
