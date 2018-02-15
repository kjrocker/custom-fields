class Length < Validation
  validate :options_must_be_valid

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

  private

  def options_must_be_valid
    unless options.present? && (options['within'].present? || options['maximum'].present? || options['minimum'].present? || options['exactly'].present?)
      errors.add(:options, "Length requires whole numbers in any of the following: 'within', 'maximum', 'minimum', 'exactly'")
    end
  end
end
