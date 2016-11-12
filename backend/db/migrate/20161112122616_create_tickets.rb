class CreateTickets < ActiveRecord::Migration[5.0]
  def change
    create_table :tickets do |t|
      t.string :name
      t.string :body
      t.string :author_email
      t.string :status

      t.timestamps
    end
  end
end
