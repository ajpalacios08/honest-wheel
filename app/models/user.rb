class User < ApplicationRecord
    has_many :reviews
    has_many :cars, through: :reviews
end
