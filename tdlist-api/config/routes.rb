# frozen_string_literal: true

Rails.application.routes.draw do
  scope '/api/version1' do
    resources :tdlists
  end
end
