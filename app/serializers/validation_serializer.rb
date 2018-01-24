class ValidationSerializer < ActiveModel::Serializer
  type 'validations'

  attributes :id, :validation_type

  def validation_type
    object.type
  end
end
