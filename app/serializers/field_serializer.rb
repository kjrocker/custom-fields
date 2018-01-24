class FieldSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :validation_count
  has_many :validations, type: 'validations'

  def validation_count
    object.validations.count
  end
end
