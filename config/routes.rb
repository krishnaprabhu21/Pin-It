Rails.application.routes.draw do

	root "pins#index"

  	devise_for :users

  	resources :pins do
  		member do 
  			put "like", to: "pins#upvote"		
  		end
  	end

end
