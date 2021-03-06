class ApplicationController < ActionController::Base
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :guest_user, only: [:new, :edit, :show, :index]
  # before_action :configure_permitted_parameters, if: :devise_controller?
  include Pundit

  # Pundit: white-list approach.
  after_action :verify_authorized, except: :index, unless: :skip_pundit?
  after_action :verify_policy_scoped, only: :index, unless: :skip_pundit?

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  def user_not_authorized
    flash[:alert] = "You are not authorized to perform this action."
    redirect_to(root_path)
  end

  def configure_permitted_parameters
    # For additional fields in app/views/devise/registrations/new.html.erb
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :phone_number])
    # For additional in app/views/devise/registrations/edit.html.erb
    devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :phone_number])
  end

  def default_url_options
    { host: ENV["DOMAIN"] || "localhost:3000" }
  end

  def guest_user
    current_user = current_user != nil ? current_user : User.create(id: 0, first_name: "guest", last_name: "user", email: "guest@guest.com")
  end

  private

  def skip_pundit?
    devise_controller? || params[:controller] =~ /(^(rails_)?admin)|(^pages$)/
  end
end
