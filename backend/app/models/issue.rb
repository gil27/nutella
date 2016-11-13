class Issue < ApplicationRecord
	validates :name, :body, :author_email, :status, presence: true
end
