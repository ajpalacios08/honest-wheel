module Api
    module V1
        class UsersController <ApplicationController
            protect_from_forgery with: :null_session

            # def index
            #     users = User.all

            #     render json: UserSerializer.new(users).serialized_json
            # end

            def create
                user = User.new(user_params)

                if user.valid?
                    render json: UserSerializer.new(user).serialized_json
                else  
                    render json: {message: user.errors.full_messages}, status: :unauthorized
                    
                end
            end


            # def update
            #     car = Car.find_by(params[:id])
            #     options = {}
            #     options[:include] = [:reviews]

            #     if car.update(car_params)
            #         render json: CarSerializer.new(car, options).serialized_json
            #     else
            #         render json: { error: car.errors.messages }, status: 422
            #     end
            # end


            private
    
            def user_params
                params.require(:user).permit(:username, :password)
            end
        end
    end
end