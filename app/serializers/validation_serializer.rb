class ValidationSerializer < ActiveModel::Serializer
  attributes :id, :field_count

  def field_count
    object.fields.count
  end
end
