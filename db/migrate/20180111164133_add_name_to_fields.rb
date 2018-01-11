class AddNameToFields < ActiveRecord::Migration[5.1]
  def up
    remove_column :fields, :label
    remove_column :fields, :key
    add_column :fields, :name, :string
  end

  def down
    remove_column :fields, :name
    add_column :fields, :label, :string
    add_column :fields, :key, :string
  end
end
