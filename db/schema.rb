# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180111171751) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "citext"
  enable_extension "hstore"

  create_table "field_validations", force: :cascade do |t|
    t.bigint "field_id"
    t.bigint "validation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["field_id"], name: "index_field_validations_on_field_id"
    t.index ["validation_id"], name: "index_field_validations_on_validation_id"
  end

  create_table "fields", force: :cascade do |t|
    t.bigint "owner_id"
    t.string "name"
    t.index ["owner_id"], name: "index_fields_on_owner_id"
  end

  create_table "taggings", force: :cascade do |t|
    t.bigint "field_id"
    t.bigint "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["field_id", "tag_id"], name: "index_taggings_on_ids", unique: true
    t.index ["field_id"], name: "index_taggings_on_field_id"
    t.index ["tag_id"], name: "index_taggings_on_tag_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.bigint "owner_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_tags_on_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.citext "email", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  create_table "validations", force: :cascade do |t|
    t.string "name"
    t.bigint "owner_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.jsonb "options"
    t.string "type"
    t.index ["owner_id"], name: "index_validations_on_owner_id"
  end

  add_foreign_key "field_validations", "fields"
  add_foreign_key "field_validations", "validations"
  add_foreign_key "fields", "users", column: "owner_id"
  add_foreign_key "taggings", "fields"
  add_foreign_key "taggings", "tags"
  add_foreign_key "tags", "users", column: "owner_id"
  add_foreign_key "validations", "users", column: "owner_id"
end
