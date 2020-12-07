class Api::UsersController < ApplicationController
    # Sign Up
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
