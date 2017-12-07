FactoryBot.define do
  factory :validation do
    name "MyString"
    association :owner, factory: :user
    options {}
  end
end
