class EmailsController < ApplicationController
  def index
    @email = Email.all
  end

  def destroy
    @email = Email.find(params[:id])
    redirect_to emails_path
    @email.delete
  end
end
