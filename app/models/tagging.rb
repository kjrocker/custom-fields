class Tagging < ApplicationRecord
  belongs_to :field
  belongs_to :tag
end
