class Field < ApplicationRecord
  belongs_to :owner, class_name: 'User'

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

  has_many :field_validations, dependent: :destroy
  has_many :validations, through: :field_validations

  def process_value(value)
    results = []
    validations.each do |validator|
      results.append( validator.process(value)) if validator.process(value)
    end
    return results
  end
end
