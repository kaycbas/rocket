class Api::SessionsController < ApplicationController
    # Sign In
    def create
        @user = User.find_by_credentials(
            params[:user][:username], 
            params[:user][:password]
        );

        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['Invalid username or password.'], status: 401
        end
    end

    # Sign Out
    def destroy
        if logged_in?
            logout!
            render json: {}
        else 
            render json: ['Nobody signed in.'], status: 404
        end
    end
end