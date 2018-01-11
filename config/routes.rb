Rails.application.routes.draw do
  scope '/api' do
    scope module: :v1 do
      post 'user_token' => 'user_token#create'
      resources :users, only: [:create, :update, :show]
      resources :fields
      resources :tags
      resources :validations
      post "taggings" => 'taggings#create'
      delete "taggings" => "taggings#destroy"
      post "field-validations" => 'field_validations#create'
      delete "field-validations" => "field_validations#destroy"
      # resources :taggings, only: [:create, :destroy]
    end
  end

  get '*path', to: "application#fallback_index_html", constraints: -> (request) do
    !request.xhr? && request.format.html?
  end
end
