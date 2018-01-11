class Validation < ApplicationRecord
  belongs_to :owner, class_name: 'User'
  has_many :field_validations, dependent: :destroy
  has_many :fields, through: :field_validations

  def process(value)
    if is_valid?(value) then nil else "#{value} is invalid" end
  end

  def is_valid?(value)
    true
  end
end
