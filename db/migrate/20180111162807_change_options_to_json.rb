class ChangeOptionsToJson < ActiveRecord::Migration[5.1]
  def up
    remove_column :validations, :options
    add_column :validations, :options, :jsonb
  end

  def down
    remove_column :validations, :options
    add_column :validations, :options, :hstore
  end
end
