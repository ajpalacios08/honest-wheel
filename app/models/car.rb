class Car < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    before_create :slugify

    def slugify
        self.slug = model.parameterize 
    end

    def avg_score
        return 0 unless reviews.count.positive?
        
        reviews.average(:score).round(2).to_f
    end
end
