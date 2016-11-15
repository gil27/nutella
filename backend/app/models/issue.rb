class Issue < ApplicationRecord
	validates :name, :body, :author_email, :status, presence: true
  validates :author_email, format: {
    with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  }
  enum status: { open: 'open', closed: 'closed' }
end
