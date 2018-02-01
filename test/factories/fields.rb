FactoryBot.define do
  factory :field do
    sequence(:name) { |n| "field-#{n}" }
    association :owner, factory: :user
    description "Lorem Ipsum"
    caption "Some Instructional Text"
    default_value "Test"
    input_category "Password"
    placeholder "Weeeeee"
  end
end
