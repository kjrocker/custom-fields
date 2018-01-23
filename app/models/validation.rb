class Validation < ApplicationRecord
  belongs_to :owner, class_name: 'User'
  has_many :field_validations, dependent: :destroy
  has_many :fields, through: :field_validations
  validates :type, presence: true

  def process(value)
    ValidationResponse.new(self, value)
  end

  def is_valid(value)
    :valid
  end

  class ValidationResponse
    attr_reader :status, :message
    def initialize(validation, value)
      @status = validation.is_valid(value)
      @message = @status.to_s
    end

    def is_valid?
      @is_valid ||= status == :valid
    end

    def is_invalid?
      !is_valid?
    end
  end
end
