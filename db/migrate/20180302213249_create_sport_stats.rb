class CreateSportStats < ActiveRecord::Migration[5.1]
  def change
    create_table :sport_stats do |t|
      t.belongs_to :sport
      t.belongs_to :user
      t.string :description, null: false
      t.integer :stat, null: false
      t.string :position, null: false
      t.string :year, null: false, default: ""

      t.timestamps
    end
  end
end
