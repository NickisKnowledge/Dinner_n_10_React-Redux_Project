class DinnersController < ApplicationController
  before_action :set_dinner, only: [:show, :destroy]

  def index
    @dinners = Dinner.all
    render json: @dinners, status: :ok
  end

  private
  def dinner_params
    params.require(:dinner).permit(
      :title,
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
