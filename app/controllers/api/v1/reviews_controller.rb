module Api
    module V1
        class ReviewsController <ApplicationController
            protect_from_forgery with: :null_session

            def create
                
                review = Review.new(review_params)
               
                if review.save
                    render json: car, include: [:reviews], methods: [:avg_score]
                else
                    render json: {error: review.errors.messages}, status: 422
                end
            end


            def destroy
                review = Review.find(params[:id])

                if review.destroy
                   head :no_content
                else
                    render json: {error: review.errors.messages}
                end
            end


            private

            def car
                @car ||= Car.find(review_params[:car_id])
            end
            
            
            def review_params
                params.require(:review).permit(:title, :description, :score, :car_id, :user_id)
            end
        end
    end
end