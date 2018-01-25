class DinnersController < ApplicationController
  before_action :set_dinner, only: [:show, :destroy, :update]

  def index
    @dinners = Dinner.all
    render json: @dinners, status: :ok
  end

  def show
    render json: @dinner, status: :ok
  end

  def create
    @dinner = Dinner.new(dinner_params)

    if @dinner.save
      render json: @dinner, status: :created
    else
      render json: { errors: @dinner.errors.full_messages,
         message: 'Can not create dinner because:' }, status: 422
    end
  end

  def update
    @dinner.update(dinner_params)
    render json: @dinner, status: :ok
  end

  def destroy
    @dinner.destroy
    head :no_content
  end

  private
  def dinner_params
    params.require(:dinner).permit(
      :id,
      :title,
      :rating,
      :image,
      image_attributes: [ :id, :name, :url ],
      ingredients_attributes: [ :id, :name ],
      directions_attributes: [ :id, :step ]
    )
  end

  def set_dinner
    @dinner = Dinner.find(params[:id])
  end
end
