FactoryBot.define do
  factory :field do
    sequence(:name) { |n| "field-#{n}" }
    association :owner, factory: :user
  end
end
