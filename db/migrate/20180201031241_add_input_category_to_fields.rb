class AddInputCategoryToFields < ActiveRecord::Migration[5.1]
  def change
    add_column :fields, :input_category, :string
    add_column :fields, :default_value, :string
    add_column :fields, :placeholder, :string
    add_column :fields, :caption, :string
  end
end
