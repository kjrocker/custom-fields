class ValidationSerializer < ActiveModel::Serializer
  type 'validations'

  attributes :id, :validation_type

  has_many :fields

  def validation_type
    object.type
  end
end
