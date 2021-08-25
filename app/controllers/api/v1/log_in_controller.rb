module Api
    module V1
        class LogInController <ApplicationController
            protect_from_forgery with: :null_session

            def create
                user = User.find_by(username:params[:user][:username])

                if user && user.authenticate(params[:user][:password])
                    render json: {id: user.id, username: user.username}
                else
                    render json: {message:['Incorrect username or password']}, status: :unauthorized
                end 
            end
        end
    end
end