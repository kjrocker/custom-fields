class Length < Validation
  def is_valid(value)
    valueLength = value.length
    if options['minimum'].present? && valueLength < options['minimum']
      return :too_short
    elsif options['maximum'].present? && valueLength > options['maximum']
      return :too_long
    elsif options['within'].present? && !options['within'].include?(valueLength)
      return :outside_range
    elsif options['exactly'].present? && valueLength != options['exactly']
      return :invalid
    else
      return :valid
    end
  end
end
