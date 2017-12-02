class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.string :name
      t.references :owner, index: true

      t.timestamps
    end
    add_foreign_key :tags, :users, column: :owner_id
  end
end
