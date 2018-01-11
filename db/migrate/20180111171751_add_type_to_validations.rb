class AddTypeToValidations < ActiveRecord::Migration[5.1]
  def change
    add_column :validations, :type, :string
  end
end
