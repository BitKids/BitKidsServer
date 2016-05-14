# This migration comes from bit_kids_api (originally 20160514204325)
class CreateBitKidsApiStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :bit_kids_api_students do |t|
      t.string :handle
      t.integer :email_id
      t.integer :account_id
      t.string :os
      t.string :device_id

      t.timestamps
    end
  end
end
