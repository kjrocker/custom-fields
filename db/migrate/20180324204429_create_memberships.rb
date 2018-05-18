class CreateMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :memberships do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :organization, foreign_key: true
      t.column :permissions, :jsonb
      t.timestamps
    end
  end
end
