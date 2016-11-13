require 'test_helper'

class TicketsControllerTest < ActionDispatch::IntegrationTest
   fixtures :tickets

   def test_create_ticket
	    get "/tickets"
	    assert_equal 200, status

	    # post the ticket 
	    post '/tickets', params: { ticket: { name: tickets(:ticket1).name,
	                               body: tickets(:ticket1).body, 
	                               author_email: tickets(:ticket1).author_email, 
	                               status: tickets(:ticket1).status }
	                              }
	    ticket = JSON.parse(response.body)
        assert_equal "ticket1", ticket['name']
   end
end
