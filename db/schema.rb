# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_08_120036) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "food_carts", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.text "cart_description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "open", default: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_food_carts_on_user_id"
  end

  create_table "food_items", force: :cascade do |t|
    t.boolean "food_availability"
    t.text "food_description"
    t.string "food_price"
    t.string "food_name"
    t.string "food_type"
    t.bigint "menu_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["menu_id"], name: "index_food_items_on_menu_id"
  end

  create_table "menus", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "food_cart_id", null: false
    t.index ["food_cart_id"], name: "index_menus_on_food_cart_id"
  end

  create_table "schedules", force: :cascade do |t|
    t.string "location"
    t.date "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "food_cart_id"
    t.float "latitude"
    t.float "longitude"
    t.datetime "start_time", null: false
    t.datetime "end_time", null: false
    t.index ["food_cart_id"], name: "index_schedules_on_food_cart_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "default"
    t.string "false"
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.bigint "food_cart_id"
    t.float "current_latitude"
    t.float "current_longitude"
    t.integer "role"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["food_cart_id"], name: "index_users_on_food_cart_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "food_carts", "users"
  add_foreign_key "food_items", "menus"
  add_foreign_key "menus", "food_carts"
  add_foreign_key "schedules", "food_carts"
  add_foreign_key "users", "food_carts"
end
