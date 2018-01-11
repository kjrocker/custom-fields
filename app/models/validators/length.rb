class Length < Validation
  def is_valid?(value)
    valueLength = value.length
    if options[:minimum].present? && valueLength >= options[:minimum]
      return true
    elsif options[:maximum].present? && valueLength <= options[:maximum]
      return true
    elsif options[:within].present? && options[:within].include?(valueLength)
      return true
    elsif options[:exactly].present? && valueLength == options[:exactly]
      return true
    else
      return false
    end
  end
end
