class ValidationSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :field_count

  def field_count
    object.fields.count
  end
end
