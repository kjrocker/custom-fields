class Validation < ApplicationRecord
  belongs_to :owner, class_name: 'User'
  has_many :field_validations, dependent: :destroy
  has_many :fields, through: :field_validations

  def process(value)
    response = if is_valid?(value) then :valid else :invalid end
    ValidationResponse.new(response)
  end

  def is_valid?(value)
    true
  end

  class ValidationResponse
    attr_reader :sym, :str
    def initialize(sym)
      @sym = sym
      @str = sym.to_s
    end

    def is_valid?
      @is_valid ||= sym == :valid
    end

    def is_invalid?
      !is_valid?
    end
  end
end
