class Blacklist < Validation
  def is_valid(value)
    if options[:list].present? && !options[:list].include?(value) then :valid else :invalid end
  end
end
