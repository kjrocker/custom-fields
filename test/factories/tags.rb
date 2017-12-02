FactoryBot.define do
  factory :tag do
    name "MyString"
    association :owner, factory: :user
  end
end
