class Validation < ApplicationRecord
  # inheritance_column "HargBlarg"
  belongs_to :owner, class_name: 'User'
  has_many :field_validations, dependent: :destroy
  has_many :fields, through: :field_validations

  # ('presence', 'absence', 'acceptance', 'inclusion', 'exclusion', 'format', 'length', 'numericality')
  # enum type: {
  #   presence: 'presence',
  #   absence: 'absence',
  #   acceptance: 'acceptance',
  #   inclusion: 'inclusion',
  #   exclusion: 'exclusion',
  #   format: 'format',
  #   length: 'length',
  #   numericality: 'numericality'
  # }
end
