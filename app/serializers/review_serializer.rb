class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :car_id, :user_id
end
