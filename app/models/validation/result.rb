class Validation::Result < ActiveModelSerializers::Model
  attributes :value, :errors

  def initialize(validations, value)
    @value = value
    @validators = validations
    @errors = []
    calculate()
  end

  def is_valid?
    errors.empty?
  end

  def calculate
    @validators.each_with_index do |v, i|
      validation_result = v.process(value)
      @errors.push metadata(v, validation_result) unless validation_result.is_valid?
    end
  end

  private

  def metadata(validation, result)
    {
      validation_name: validation.name,
      value: value,
      validation_status: result.status
    }
  end
end
