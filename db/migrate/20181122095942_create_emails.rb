class CreateEmails < ActiveRecord::Migration[5.2]
  def change
    create_table :emails do |t|
      t.string :objet
      t.string :body
      t.timestamps
    end
  end
end
