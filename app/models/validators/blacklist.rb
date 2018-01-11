class Blacklist < Validation
  def is_valid?(value)
    options[:list].present? && !options[:list].include?(value)
  end
end
