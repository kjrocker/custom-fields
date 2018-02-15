FactoryBot.define do
  factory :validation do
    name "MyString"
    type 'Length'
    association :owner, factory: :user
    options { {'minimum' => 1} }
  end
end
