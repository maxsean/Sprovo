class CreateGrades < ActiveRecord::Migration[5.1]
  def change
    create_table :grades do |t|
      t.belongs_to :user
      t.belongs_to :course
      t.string :score, null: false, default: "IP"
      t.string :year, null: false, default: ""
      t.string :quarter, null: false, default: ""

      t.timestamps
    end
    add_index :grades, [:user_id, :course_id], unique: true
  end
end
