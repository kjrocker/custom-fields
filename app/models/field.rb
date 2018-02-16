class Field < ApplicationRecord
  belongs_to :owner, class_name: 'User'

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

  has_many :field_validations, dependent: :destroy
  has_many :validations, through: :field_validations

  def process_value(value)
    Validation::Result.new(validations, value)
  end

  def self.with_tags(tags)
    joins(:taggings).where('taggings.tag_id = ?', tags)
  end
end
