class EmailsController < ApplicationController
  def index
    @email = Email.all
  end

  def destroy
    @email = Email.find(params[:id])
    puts 'DESTROOOYYYY'
    puts @email.id
    if @email.delete
      respond_to do |format|
        format.html { redirect_to emails_path }
        format.js { @email}
        flash[:notice] = "Email supprimé"
      end
    else
      redirect_to emails_path
      flash[:notice] = "Impossible de supprimer l'email"
    end
  end
end
