class Api::JobsController < ApplicationController

    before_action :set_job, only: [:destroy, :show, :update]
    
    def index
        render json: Job.all
    end

    def create
        @job = Job.new(set_params)
        if @job.save
            render json: @job
        else
            render json: {errors: @job.errors}, status: 422 # :unprocessable_entity
        end
    end

    def show
        render json: @job
    end

    def update
        if @job.update(set_params)
            render json: @job
        else
            render json: {errors: @job.errors}, status: 422 
        end
    end

    def destroy
        render json: @job.destroy
    end

    private

    def set_params
        params.require(:job).permit(:title, :company, :salary)
    end

    def set_job
        @job = Job.find(params[:id])
    end

end
