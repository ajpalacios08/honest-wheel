class User < ApplicationRecord
    has_many :reviews
    has_many :cars, through: :reviews

    validates :username, :password, presence: {message: "must be present"}
    validates :username, uniqueness: true
    has_secure_password

end
