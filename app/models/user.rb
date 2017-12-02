class User < ApplicationRecord
  has_secure_password
  has_many :fields, foreign_key: :owner_id

  validates :email, presence: true, uniqueness: true

  # Simple wrapper for Knock, making it easy to grab new tokens
  def to_jwt
    Knock::AuthToken.new(payload: { sub: id }).token
  end
end
