class CreateFields < ActiveRecord::Migration[5.1]
  def change
    create_table :fields do |t|
      t.string :key
      t.string :label
      t.references :owner, index: true
    end
    add_foreign_key :fields, :users, column: :owner_id
  end
end
