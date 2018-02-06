class FieldSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :caption, :default_value, :placeholder, :input_category
  has_many :validations
  has_many :tags
end
