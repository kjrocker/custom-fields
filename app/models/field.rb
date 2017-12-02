class Field < ApplicationRecord
  belongs_to :owner, class_name: User

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
end
