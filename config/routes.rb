Rails.application.routes.draw do
  scope '/api' do
    scope module: :v1 do
      post 'user_token' => 'user_token#create'
      resources :users, only: [:create, :update, :show]
      resources :fields do
        post "validate" => 'fields#validate'
      end
      resources :tags
      resources :validations
      # resources :taggings, only: [:create, :destroy]
    end
  end

  get '*path', to: "application#fallback_index_html", constraints: -> (request) do
    !request.xhr? && request.format.html?
  end
end
