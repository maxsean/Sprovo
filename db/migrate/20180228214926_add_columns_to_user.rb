class AddColumnsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :mentor_id, :integer
    add_column :users, :role, :string, null: false, default: "student"
  end
end
