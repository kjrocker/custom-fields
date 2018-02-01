class FieldSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :caption, :default_value, :placeholder, :input_category
  has_many :validations
  has_many :tags

  def validation_count
    object.validations.count
  end
end
