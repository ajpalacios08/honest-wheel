class CarSerializer
  include FastJsonapi::ObjectSerializer
  attributes :year, :make, :model, :image_url, :slug, :avg_score

  has_many :reviews
  has_many :users, through: :reviews
end
