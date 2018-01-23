class AddDescriptionToTables < ActiveRecord::Migration[5.1]
  def change
    add_column :fields, :description, :text
    add_column :validations, :description, :text
    add_column :tags, :description, :text
  end
end
