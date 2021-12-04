class Api::CategoriesController < ApplicationController

    before_action :set_category, only: [:destroy, :show, :update]
    
    def index
        render json: Category.all, include: [:items]
    end

    def create
        @category = Category.new(set_params)
        if @category.save
            render json: @category
        else
            render json: {errors: @category.errors}, status: 422 # :unprocessable_entity
        end
    end

    def show
        render json: @category
    end

    def update
        if @category.update(set_params)
            render json: @category
        else
            render json: {errors: @category.errors}, status: 422 
        end
    end

    def destroy
        render json: @category.destroy
    end

    private

    def set_params
        params.require(:category).permit(:name)
    end

    def set_category
        @category = Category.find(params[:id])
    end

end
