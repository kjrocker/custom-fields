class Tag < ApplicationRecord
  belongs_to :owner, class_name: User
  has_many :taggings, dependent: :destroy
  has_many :fields, through: :taggings
end
