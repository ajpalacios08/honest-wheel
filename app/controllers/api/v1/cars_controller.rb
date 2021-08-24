module Api
    module V1
        class CarsController <ApplicationController
            protect_from_forgery with: :null_session

            def index
                cars = Car.all
                options = {}
                options[:include] = [:reviews]

                render json: CarSerializer.new(cars, options).serialized_json
            end

            def show
                car = Car.find_by(slug: params[:slug])
                options = {}
                options[:include] = [:reviews]

                render json: CarSerializer.new(car, options).serialized_json
            end

            def create
                car = Car.new(car_params)

                if car.save
                    render json: CarSerializer.new(car).serialized_json
                else
                    render json: { error: car.errors.messages }, status: 422
                end
            end


            def update
                car = Car.find_by(slug: params[:slug])
                options = {}
                options[:include] = [:reviews]

                if car.update(car_params)
                    render json: CarSerializer.new(car, options).serialized_json
                else
                    render json: { error: car.errors.messages }, status: 422
                end
            end


            def destroy
                car = Car.find_by(slug: params[:slug])

                if car.destroy
                    head :no_content
                else
                    render json: { error: car.errors.messages }, status: 422
                end
            end


            private
    
            def car_params
                params.require(:car).permit(:year, :make, :model, :image_url)
            end
        end
    end
end