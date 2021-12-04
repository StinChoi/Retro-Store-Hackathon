class Api::ItemsController < ApplicationController

    before_action :set_category
    before_action :set_item, only: [:destroy, :show, :update]
    
    def index
        render json: @category.items 
    end

    def create
        @item = @category.items.new(set_params)
        if @item.save
            render json: @item
        else
            render json: {errors: @item.errors}, status: 422 
        end
    end

    def show
        render json: @item
    end

    def update
        if @item.update(set_params)
            render json: @item
        else
            render json: {errors: @item.errors}, status: 422 
        end
    end

    def destroy
        render json: @item.destroy
    end

    private

    def set_params
        params.require(:item).permit(:name, :description, :price)
    end

    def set_item
        @item = @category.items.find(params[:id]) 
    end

    def set_category
        @category = Category.find(params[:category_id])
    end

end
