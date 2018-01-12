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

  def process(value)
    puts options.inspect
    puts options['minimum'].present?
    if options['minimum'].present? && value.length < options['minimum'].to_i
      return "#{value} is too short!"
    else
      return false
    end
  end
end
