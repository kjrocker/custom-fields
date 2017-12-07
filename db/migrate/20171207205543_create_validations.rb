class CreateValidations < ActiveRecord::Migration[5.1]
  def change
    enable_extension 'hstore' unless extension_enabled?('hstore')

    create_table :validations do |t|
      t.string :name
      t.references :owner, index: true
      t.hstore :options
      t.timestamps
    end

    create_table :field_validations do |t|
      t.belongs_to :field, foreign_key: true
      t.belongs_to :validation, foreign_key: true

      t.timestamps
    end

    add_foreign_key :validations, :users, column: :owner_id
  end
end
