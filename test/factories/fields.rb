FactoryBot.define do
  factory :field do
    sequence(:key) { |n| "field-#{n}" }
    label "Custom Field"
    association :owner, factory: :user
  end
end
