class Validation::Result
  extend ActiveModel::Naming
  attr_reader :value, :validators, :errors

  def initialize(field, value)
    @value = value
    @field = field
    @validators = field.validations
    @errors = ActiveModel::Errors.new(self)
    calculate()
  end

  def is_valid?
    errors.empty?
  end

  def calculate
    validators.each_with_index do |v, i|
      validation_result = v.process(value)
      errors.add(:base, validation_result.sym, message: validation_result.str) unless validation_result.is_valid?
    end
  end

  # Necessary for ActiveModel::Errors to work
  def read_attribute_for_validation(attr)
    send(attr)
  end

  def self.human_attribute_name(attr, options = {})
    attr
  end

  def self.lookup_ancestors
    [self]
  end
end
