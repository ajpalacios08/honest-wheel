class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :password_digest

  has_many :reviews
  has_many :cars, through: :reviews
end
