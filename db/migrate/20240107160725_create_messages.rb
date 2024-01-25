class CreateMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.string :content
      t.string :username
      t.string :location

      t.timestamps
    end
  end
end
