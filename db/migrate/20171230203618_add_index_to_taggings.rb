class AddIndexToTaggings < ActiveRecord::Migration[5.1]
  def change
    add_index :taggings, [:field_id, :tag_id], unique: true, name: 'index_taggings_on_ids'
  end
end
